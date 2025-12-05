import {asyncHandler} from '../utilities/asyncHandler.js'
import {ApiError} from '../utilities/apiError.js'
import {ApiResponse} from '../utilities/apiResponse.js'
import {User} from '../models/User.model.js'
import {Resume} from '../models/Resume.model.js'
import slugify from "slugify";
import { nanoid } from "nanoid";

export const createSlug = (title) => {
  const base = slugify(title, { lower: true });
  return `${base}-${nanoid(6)}`;
};

const addResume = asyncHandler(async(req,res)=>{
  const {title} = req.body;
  const userid = req.user._id
  
  if(!title){
    throw new ApiError(400,"title required!");
  }
  
  const slug = createSlug(title)
  
  const resume = await Resume.create({
    title,
    owner : userid,
    slug
  })
  
  if(!resume){
    throw new ApiError(500,"Something went wrong");
  }
  
  res
  .status(201)
  .json(new ApiResponse(201,resume,"Resume added successfully"))
})

const removeResume = asyncHandler(async(req,res)=>{
  
  const {slug} = req.params;
  const userid = req.user._id;
  
  const deleteResume = await Resume.findOneAndDelete({
    owner : userid, 
    slug
  })
  
  if(!deleteResume){
    throw new ApiError(404, "resume not found");
  }
  
  res
  .status(200)
  .json(new ApiResponse(200, deleteResume, "resume deleted successfully"))
})

const getResumes = asyncHandler(async(req,res)=>{
  const owner = req.user._id;
  
  const resumes = await Resume.find({owner});
  
  res
  .status(200)
  .json(new ApiResponse(200,resumes,"resume fetched successfully"))
})

export{
  addResume,
  removeResume,
  getResumes
}