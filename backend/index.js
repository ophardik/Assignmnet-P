const express=require("express");
const mongoose = require("mongoose");
const dotenv=require("dotenv")
const fileUpload = require('express-fileupload'); 
const cors=require("cors")
const userRoute=require("./route/user")
const cloudinary=require("cloudinary")
const connectToMongoDB=require("./connection/connection")
const app=express()

dotenv.config({ path: './config/config.env' });
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

app.use(fileUpload({ useTempFiles: true })); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
connectToMongoDB(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Started");
    })
    .catch((err) => {
        console.error("MongoDB Connection Error:", err);
    });

    app.use("/api",userRoute)


    app.listen(process.env.PORT, () => {
        console.log("Server started");
    });