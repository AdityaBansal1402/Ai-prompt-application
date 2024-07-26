const mongoose = require ('mongoose');

const promptschema = new mongoose.Schema({
    promptsid:{
        type:mongoose.Schema.ObjectId,
        ref:'prompts'
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
    imgurl:{
        type: String,
        required:true
    }
},{timestamps:true})
const Prompt=mongoose.model('prompt',promptschema,'prompt');
module.exports=Prompt;