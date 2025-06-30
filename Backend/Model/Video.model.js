
import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100
  },
  thumbnailUrl: {
    type: String,
    required: true
  },
  videoUrl: {
    type: String,
    required: true
  },
  description: {
    type: String,
    maxlength: 500
  },
  channelId: {
    type: String,
    required: true
  },
  uploader: {
    type: String,
    required: true
  },
  views: {
    type: Number,
    default: 0,
    min: 0
  },
  likes: {
    type: Number,
    default: 0,
    min: 0
  },
  dislikes: {
    type: Number,
    default: 0,
    min: 0
  },
  period: {
    type: String,
    default: 'Just now'
  },
  uploadDate: {
    type: String,
    default: () => new Date().toISOString().split('T')[0]  // YYYY-MM-DD format
  },
  comments: [
    {
      username: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
      },
      text: {
        type: String,
        required: true,
        maxlength: 300
      },
      timestamp: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

const videoModel = mongoose.model("videos", videoSchema);

export default videoModel;
