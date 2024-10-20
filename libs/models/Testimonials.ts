import mongoose from 'mongoose';

const testMonialSchema = new mongoose.Schema({
     tetimonier:{
        type:String,
        required:true,
    },
    testimony:{
        type:String,
    }
})

