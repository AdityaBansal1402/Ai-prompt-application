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
router.get('/allprompt/:id',fetchuser,async(req,res)=>{
    try{
        let success=false;
        const user=await User.findById(req.user.id);
        const prompts=await Prompts.findById(req.params.id);
        const prompt=await Prompt.find({promptsid:req.params.id}).sort({date:-1});
        success=true;
        res.json({success,prompt});
    }catch(error){
        success=false;
        res.status(500).json({success, error: "Internal server error" });
    }
})
router.get('/allprompts',fetchuser,async(req,res)=>{
    try{
        let success=false;
        const user=await User.findById(req.user.id);
        const prompts=await Prompts.find({userid:req.user.id});
        success=true;
        res.json({success,prompts});
    }catch(error){
        success=false;
        res.status(500).json({success, error: "Internal server error" });
    }
})
router.delete('/deleteprompts/:id',fetchuser,async(req,res)=>{
    try{
        const user=await User.findById(req.user.id);
        const prompts=await Prompts.findById(req.params.id);
        const prompt=await Prompt.find({promptsid:req.params.id}).sort({date:-1});
        
        success=true;
        res.json({success,prompts});
    }catch(error){
        success=false;
        res.status(500).json({success, error: "Internal server error" });
    }
})

module.exports = router;