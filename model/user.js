const mongoose=require('mongoose');

var Schema= new mongoose.Schema;
const User= new mongoose.Schema({
    name:{
        required:true,
        type:String,
    },
    age:{
        type:Number,
        required:true,
    },
    tasks:{
        type:Array,

    }
});

module.exports=mongoose.model("User",User);