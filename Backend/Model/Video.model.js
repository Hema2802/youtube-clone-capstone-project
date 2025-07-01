
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
  category:{
    type:String,
    required:true
  },
  categoryId:{
  type:String,
  required:true
  },
  videoUrl: {
    type: String,
    required: true
  },
  logoUrl:{
    type:String,
    required:true
  },
  description: {
    type: String,
    maxlength: 1000
  },
  channelId: {
    type: String,
    required: true
  },
  subscription: {
    type:String,
    required : true
  },
  uploader: {
    type: String,
    required: true
  },
  views: {
    type: String,
    // default: "",
    required:true
    
  },
  likes: {
    type: String,
    // default: "",
    required:true
    
  },
  dislikes: {
    type: Number,
    // default: "",
    required:true
    
  },
  period: {
    type: String,
    default: 'Just now'
  },
  uploadDate: {
    type: String,
    default: () => new Date().toISOString().split('T')[0]  
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
        type: String,
        required:true
      }
    }
  ]
});

const videoModel = mongoose.model("videos", videoSchema);

export default videoModel;
