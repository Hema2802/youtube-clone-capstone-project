
import { createVideo, deleteVideo, fetchVideos, updateVideoData } from "../Controller/Video.controller.js";

export function routes(app) {
    app.post("/api/video",createVideo);
    app.get("/api/videos",fetchVideos);
    app.put("/api/video/:id", updateVideoData);
    app.delete("/api/video/:id",deleteVideo);
}