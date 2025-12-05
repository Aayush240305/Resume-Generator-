import {Router} from 'express'
import {addResume,removeResume,getResumes} from '../controllers/Resume.controller.js'
import {verifyUser} from '../middlewares/Auth.middleware.js'
const resumeRouter = Router();

resumeRouter.route("/add").post(verifyUser,addResume)
resumeRouter.route("/remove/:slug").delete(verifyUser,removeResume)
resumeRouter.route("/get").get(verifyUser,getResumes)

export default resumeRouter;