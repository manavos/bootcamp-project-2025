import mongoose, { Schema } from "mongoose";

type Project = {
    project: string;
    image: string;
    imageAlt: string;
    link: string;
    description: string;
}

const projectSchema = new Schema<Project>({
    project: { type: String, required: true },
    image: { type: String, required: true },
    imageAlt: { type: String, required: true },
    link: { type: String, required: true },
    description: { type: String, required: true },
})

// defining the collection and model
const Project = mongoose.models['projects'] ||
    mongoose.model('projects', projectSchema);

export default Project;