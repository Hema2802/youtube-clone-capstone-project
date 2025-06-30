
import { createVideo } from "../Controller/Video.controller.js";

export function routes(app) {
    app.post("/api/video",createVideo);
}