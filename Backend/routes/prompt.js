const express=require('express');
const router=express.Router();
const User=require('../models/user');
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser');
const Prompt = require('../models/prompt');
const Prompts = require('../models/prompts');


router.post('/createprompt',fetchuser,async(req,res)=>{
    try{
        let success=false;
        const user=await User.findById(req.user.id);
        const prompts=new Prompts({
            userid:req.user.id
        })
        const savedPrompts=await prompts.save();
        success=true;
        res.json({success,savedPrompts});
    }catch(error){
        success=false;
        res.status(500).json({success, error: "Internal server error" });
    }
})

router.post('/prompting/:id',fetchuser,async(req,res)=>{
    try{
        let success=false;
        const user=await User.findById(req.user.id);
        const prompts=await Prompts.findById(req.params.id);
        const prompt=new Prompt({
            promptsid:req.params.id,
            title:req.body.title,
            description:req.body.description,
            imgurl:req.body.imgurl
        })
        const savedPrompt=await prompt.save();
        success=true;
        res.json({success,savedPrompt});
    }catch(error){
        success=false;
        res.status(500).json({success, error: "Internal server error" });
    }
})

module.exports = router;
