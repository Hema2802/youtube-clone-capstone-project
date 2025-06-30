
import express from "express";
import mongoose from "mongoose";
import { routes } from "./Routes/Video.routes.js";

const app=new express();
app.use(express.json())
const PORT =3000;
app.listen(PORT,()=>{
    console.log(`Server is running successfully on PORT ${PORT} 🚀`)
})

mongoose.connect("mongodb://localhost:27017");
const db=mongoose.connection;

db.on("open",()=>{
    console.log("DB connected ✅")
});

db.on("error",()=>{
    console.log("DB connection Failed ❌")
})

routes(app);