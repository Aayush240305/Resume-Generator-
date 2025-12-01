import {Router} from 'express'
import {registerUser,loginUser, logoutUser,getUser} from '../controllers/User.controller.js'
import {verifyUser} from '../middlewares/Auth.middleware.js'
const userRouter = Router()

userRouter.route("/register").post(registerUser)
userRouter.route("/login").post(loginUser)
userRouter.route("/logout").post(verifyUser,logoutUser)
userRouter.route("/user").get(verifyUser,getUser)


export default userRouter; 