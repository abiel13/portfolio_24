import mongoose from 'mongoose';

const testMonialSchema = new mongoose.Schema({
     testimonier:{
        type:String,
        required:true,
    },
    testimony:{
        type:String,
    }
})

const Testimonial = mongoose.models.Testimony || mongoose.model('Testimony',testMonialSchema)

export default Testimonial