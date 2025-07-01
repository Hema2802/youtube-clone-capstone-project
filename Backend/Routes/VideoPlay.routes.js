import { getAllVideos, getVideoById } from "../Controller/VideoPlay.controller.js";





export function videoRoutes(app){
      // GET all videos
app.get("/api/videos", getAllVideos);

// GET video by ID
app.get("/api/videos/:id", getVideoById);

}


