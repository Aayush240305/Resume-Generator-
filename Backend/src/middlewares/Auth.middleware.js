import {asyncHandler} from '../utilities/asyncHandler.js'
import {ApiError} from '../utilities/apiError.js'
import jwt from 'jsonwebtoken'
import {User} from '../models/User.model.js'

const veifyUser = asyncHandler(async(req,res,next)=>{
    
    const token = req.cookies.accessToken || req.header("authorization")?.replace("Bearer ", "");
    
    try{
      const decodedUser = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
      
      const User = await User.findById(decodedUser?._id).select("-password -refreshToken");
      
      if(!user){
        throw new ApiError("401", "invalid token");
      }
      req.user = User;
      
      next();
      
    }catch(err){
    throw new ApiError(400, err?.message || "access is invalid")
    }
})