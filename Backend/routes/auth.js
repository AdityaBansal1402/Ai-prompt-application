const express=require('express');
const router=express.Router();
const User=require('../models/user');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
const JWT_SECRET="somethingSecysecy";

router.post('/createuser',[
    body('email',"enter a valid email").isEmail(),
    body('name',"Enter a valid name").isLength({min:3}),
    body('password',"your password should be greater than 5 letters").isLength({min:5})
],async (req,res)=>{
    let success=false
    const erro=validationResult(req);
    if(!erro.isEmpty()){
        return res.status(400).json({errors: erro.array()});
    }
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ success, error: "Duplicate email" });
        }
        const salt= await bcrypt.genSalt(10);
        const secpass= await bcrypt.hash( req.body.password,salt);
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secpass,
            pic: req.body.pic
        });
        const data={
            user:{
                id:user.id
            }
        }
        const authtoken= await jwt.sign(data,JWT_SECRET);
        success=true
        res.json({success, authtoken});
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal server error" });
    }

})

router.post('/login',[
    body('email',"enter a valid email").isEmail(),
    body('password',"password cannot be blank").exists(),
],async (req,res)=>{
    let success=false;
    const erro=validationResult(req);
    if(!erro.isEmpty()){
        return res.status(400).json({errors: erro.array()});
    }
    const{email,password}=req.body;
    try{
        const user= await User.findOne({email});
        if(!user){
            return res.status(400).json({success,error:"Please enter the correct credentials"});
        }
        const passwordcomp= await bcrypt.compare(password,user.password);
        if(!passwordcomp){
            return res.status(400).json({success,error:"Please enter the correct credentials"});
        }
        const data={
            user:{
                id:user.id
            }
        }
        const authtoken= await jwt.sign(data,JWT_SECRET);
        success=true;
        res.json({success,authtoken});
    }catch(error){
        console.error("Error loging user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
})

router.get('/getuser',fetchuser,async (req,res)=>{
    try{
        let success=false;
        let userId=req.user.id;
        const user = await User.findById(userId).select("-password");
        success=true;
        res.send({success,user});
    }catch(error){
        success=false;
        console.error("Error loging user:", error);
        res.status(500).json({success, error: "Internal server error" });
    }

})

module.exports = router;
