import mongoose, { Schema } from "mongoose";

export type IComment = {
  user: string;
  time: Date;
  comment: string;
};

const commentSchema = new Schema<IComment>({
  user: { type: String, required: true },
  time: { type: Date, required: false, default: new Date()}, //or date.now()
  comment: { type: String, required: true },
});

type Project = {
    project: string;
    image: string;
    imageAlt: string;
    link: string;
    description: string;
    comments: IComment[];
}

const projectSchema = new Schema<Project>({
    project: { type: String, required: true },
    image: { type: String, required: true },
    imageAlt: { type: String, required: true },
    link: { type: String, required: true },
    description: { type: String, required: true },
    comments: {type: [commentSchema], default: []},
})


const Project = mongoose.models['projects'] ||
    mongoose.model('projects', projectSchema);

export default Project;