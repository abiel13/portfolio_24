import mongoose  from "mongoose";

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  thumbnailUrl: {
    type: String,
    required: true,
  },
});


const SkillModel = mongoose.models.Skills || mongoose.model('Skills',skillSchema)

export default SkillModel