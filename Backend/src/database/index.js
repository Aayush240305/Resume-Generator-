import mongoose from 'mongoose'
import {DB_Name} from '../constant.js'

const connectDB = async()=>{
try{
  const DB = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`);
  console.log("Mongodb connected successfully !!! Host : ",DB.connection.host);
}catch(error){
  console.log("Mongodb connection failed",error);
}
}
export default connectDB;