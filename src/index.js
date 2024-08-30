import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({path:"./env"})


connectDB()





// first approach to connect your mongodb 
/*
import express from "express"
const app = express()
// function connectDB(params) {
  
// }

// connectDB()

// better approach of the aboce code to connect your mongodb
( async () => {
  try{
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error",(error) => {
      console.log("Error: ",error)
      throw error
    })

    app.listen(process.env.PORT,() => {
      console.log(`server is running on ${process.env.PORT}`);
    })

  }
  catch(error) {
    console.error("Error: ",error);
    throw error
  }
} )()

*/


