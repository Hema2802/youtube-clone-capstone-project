
import { getAllVideos, getVideoById } from "../Controller/VideoPlay.controller.js";
import { VerifyToken } from "../Middleware/VerifyToken.js";




export function videoRoutes(app){
      // GET all videos
app.get("/api/videos",VerifyToken, getAllVideos);

// GET video by ID
app.get("/api/videos/:id",VerifyToken, getVideoById);

}


