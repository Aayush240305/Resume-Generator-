import mongoose, { Schema } from "mongoose";

const resumeSchema = new Schema(
  {
    title: { type: String }, 
    
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    
    slug: { type: String, unique: true },
    color: { type: String },
    template: { type: String },

    personalInfo: {
      photo: { type: String },
      name: { type: String },
      phoneNo: { type: String },
      location: { type: String },
      email: { type: String },
      website: { type: String },
      linkedin: { type: String },
      profession: { type: String },
    },

    professionalSummary: { type: String },

    experience: [
      {
        company: { type: String },
        title: { type: String },
        start: { type: String },
        end: { type: String },
        description: { type: String },
      },
    ],

    education: [
      {
        institute: { type: String },
        degree: { type: String },
        completitionYear: { type: String },
        cgpa: { type: String },
      },
    ],

    project: [
      {
        name: { type: String },
        tech: { type: String },
        description: { type: String },
      },
    ],

    skills: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

export const Resume = mongoose.model("Resume", resumeSchema);