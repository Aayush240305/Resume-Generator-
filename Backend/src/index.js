import dotenv from 'dotenv'
import connectDB from './database/index.js'
import {app} from './app.js'

dotenv.config({path:'./.env'})

let port = process.env.PORT || 5000;

connectDB()
.then(()=>{
  app.listen(port, ()=>{
    console.log("Server is listening on port : ", port);
  })
})
.catch((error) => {
  console.error('Mongodb connection failed', error);
})