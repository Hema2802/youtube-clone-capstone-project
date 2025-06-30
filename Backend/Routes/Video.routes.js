
import { createVideo, fetchVideos } from "../Controller/Video.controller.js";

export function routes(app) {
    app.post("/api/video",createVideo);
    app.get("/api/videos",fetchVideos)
}