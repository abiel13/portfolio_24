import mongoose from "mongoose";

const expSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
    unique: true,
  },
  companyBrief: {
    type: String,
  },
  startDate: {
    type: String,
  },
  endDate: {
    type: String,
  },
});

const Exps = mongoose.models.Exps ||  mongoose.model('Exps',expSchema)

export default Exps