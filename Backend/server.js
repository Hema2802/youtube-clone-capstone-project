
import express from "express";
import mongoose from "mongoose";
import { routes } from "./Routes/Video.routes.js";
import cors from 'cors'
import { userRoutes } from "./Routes/User.routes.js";
import { videoRoutes } from "./Routes/videoPlay.routes.js";

const app=new express();
app.use(express.json())
app.use(cors()); //cors middleware
// server for running
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is running successfully on PORT ${PORT} 🚀`)
})

// to log the request
function requestLogger(req, res, next) {
  const start = Date.now();

  // Wait for the response to finish
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`);
  });

  next(); // Pass control to the next middleware or route handler
}

// Database replaced with array-user data

app.use(requestLogger);

mongoose.connect("mongodb://localhost:27017");
const db=mongoose.connection;
// db is successfully connected
db.on("open",()=>{
    console.log("DB connected ✅")
});
// if failed to connect
db.on("error",()=>{
    console.log("DB connection Failed ❌")
})

// routes calling
routes(app);
userRoutes(app);
videoRoutes(app);
