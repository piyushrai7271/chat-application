import mongoose from "mongoose";


const connectDB = async () =>{
   try {
      await mongoose.connect(process.env.MONGO_URL,{
          useNewUrlParser:true,
          useUnifiedTopology:true,
      })
      console.log(`MongoDb connected successfully`);
   } catch (error) {
     console.log(`MongoDb connection failed: ${error.message}`);
     process.exit(1);
   }
};



export {
    connectDB
}