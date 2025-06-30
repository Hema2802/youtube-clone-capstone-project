
export function createVideo(req,res){
    const{title,thumbnailUrl,channelId,views,period,description,uploader,likes,dislikes,uploadDate,comments,videoUrl}=req.body;

    const newVideo= new videoModel({
        title : title,
        channelId:channelId,
        views:views,
        period:period,
        thumbnailUrl:thumbnailUrl,
        description:description,
        uploader:uploader,
        likes:likes,
        dislikes:dislikes,
        uploadDate:uploadDate,
        comments:comments,
        videoUrl:videoUrl
    }) 

    newVideo.save().then(data =>{
        if(!data){
            return res.status(400).json({message:"Something went wrong 🤔"})
        }

        res.send(data)
    })
  
}