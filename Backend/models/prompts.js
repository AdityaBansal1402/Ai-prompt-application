const mongoose = require ('mongoose');

const promptsschema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'user'
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
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
    },
    promp:{
        type:mongoose.Schema.ObjectId,
        ref:'prompt'
    }
},{timestamps:true})
const User=mongoose.model('prompts',promptsschema,'allprompts');
module.exports=User;