
import { createVideo, deleteVideo, fetchVideos, updateVideoData } from "../Controller/Video.controller.js";
import { VerifyToken } from "../Middleware/VerifyToken.js";

export function routes(app) {
    app.post("/api/video",VerifyToken,createVideo);
    app.get("/api/videos",fetchVideos);
    app.put("/api/video/:id", updateVideoData);
    app.delete("/api/video/:id",deleteVideo);
}