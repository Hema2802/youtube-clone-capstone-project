// importing
import { createVideo, deleteVideo, fetchVideos, searchVideo, updateVideoData } from "../Controller/Video.controller.js";
import { VerifyToken } from "../Middleware/VerifyToken.js";


// export the routes to post,get,put and delete
export function routes(app) {
    app.post("/api/video",VerifyToken,createVideo);
    app.get("/api/videos",VerifyToken,fetchVideos);
    app.put("/api/video/:id", updateVideoData);
    app.delete("/api/video/:id",deleteVideo);
    app.get("/search",searchVideo);
}