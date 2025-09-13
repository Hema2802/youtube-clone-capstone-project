
import express from "express";
import mongoose from "mongoose";
import { routes } from "./Routes/Video.routes.js";
import cors from 'cors'
import { userRoutes } from "./Routes/User.routes.js";
import { videoRoutes } from "./Routes/VideoPlay.routes.js";
import { seedDB } from "./Seed.js";

const app=new express();
app.use(express.json())
app.use(cors(
  {
  origin: "*"
}
)); 
//cors middleware
// server for running
const PORT =process.env.PORT || 5000;
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

// routes calling
routes(app);
userRoutes(app);
videoRoutes(app);

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/youtube_clone";

mongoose
  .connect(MONGO_URI)
  .then(async () => {
    console.log("DB connected ✅");

    // ✅ Only seed after successful connection
    await seedDB();
  })
  .catch((err) => {
    console.error("DB connection Failed ❌", err);
  });

 
