const mongoose = require ('mongoose');

const promptsschema = new mongoose.Schema({
    userid:{
        type:mongoose.Schema.ObjectId,
        ref:'user'
    },
    title:{
        type:String,
        default: "New Chat"
    },
    description:[
        {
            title:{
                type:String,
                required:true
            },
            des:{
                type:String,
                required:true
            }
        }
    ],
    date: {
        type: Date,
        default: function() {
            // Format the current date using toLocaleString with options
            return new Date().toLocaleString(undefined, {
                year: 'numeric',
                month: 'short',
                day: '2-digit',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            });
        }
    }
},{timestamps:true})
const Prompts=mongoose.model('prompts',promptsschema,'allprompts');
module.exports=Prompts;