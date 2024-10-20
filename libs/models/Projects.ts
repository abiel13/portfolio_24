import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  thumbnailUrl: {
    type: String,
    required: true,
  },
  links: {
    type: [String],
  },
  description: {
    type: String,
    required: true,
  },
  tools: {
    type: [String],
    required: true,
  },
});

const ProjectModel =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

export default ProjectModel;
