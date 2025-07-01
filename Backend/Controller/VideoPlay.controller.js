
//import videoModel from "../Model/Video.model.js";
import videoModel from "../Model/Video.model.js";

// GET /api/videos
export const getAllVideos = async (req, res) => {
    try {
        const videos = await videoModel.find();
        res.json(videos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET /api/videos/:id
export const getVideoById = async (req, res) => {
    try {
        const video = await videoModel.findById(req.params.id);
        if (!video) return res.status(404).json({ error: "Video not found" });
        res.json(video);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
