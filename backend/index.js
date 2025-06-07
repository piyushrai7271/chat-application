import {connectDB} from "./src/config/db.js";
import dotenv from "dotenv";
import {app} from "./app.js";

dotenv.config({
    path:"./.env"
})

connectDB()
  .then(()=>{
    app.listen(process.env.PORT || 4500, ()=>{
        console.log(`App running at Port : ${process.env.PORT}`)
    });
  })
  .catch((err)=>{
    console.log(`MongoDB connection error : ${err}`)
  })