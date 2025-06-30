import videoModel from "../Model/Video.model.js";


export function createVideo(req,res){
    const{title,thumbnailUrl,logoUrl,channelId,views,period,description,uploader,subscription,likes,dislikes,uploadDate,comments,videoUrl}=req.body;

    const newVideo= new videoModel({
        title : title,
        channelId:channelId,
        views:views,
        period:period,
        subscription:subscription,
        thumbnailUrl:thumbnailUrl,
        logoUrl:logoUrl,
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


export function fetchVideos(req,res){
    videoModel.find().then((data)=>{
        if(!data){
            return res.status(404).send("Somthing went wrong");
        }
        res.send(data)
    }).catch((err)=>{
        res.status(401).json({message:"Internal server error" || err.message})
    })
}


// 3) Update product details

export async function updateVideoData(req,res){
    // try and catch method
     try{
    //    find id of the product
        const _id= req.params.id;
        //  update
        let updatedData = await videoModel.findByIdAndUpdate( _id, req.body,{new:true});
        // if there is no product to update in DB
        if(!updatedData){
            return res.status(404).json({message:"No product's data is found in dataBase🚧"})
        }

        return res.status(201).json({"Updated data":updatedData})
     } 
    //  common error 
     catch(err){
        return res.status(500).json({err:"Something went wrong while try to update product's data list from DB ⚠️"})
     }
    
}

// 4)delete the product

export async function deleteVideo(req,res){
    // try and catch method
     try{
    //    find id of the product
        const _id= req.params.id;
        //  delete
        let deletedData = await videoModel.findByIdAndDelete( _id);
        // if there is no product to delete in DB
        if(!deletedData){
            return res.status(404).json({message:"No product's data is found in dataBase🚧"})
        }

        return res.status(201).json({"Deleted Successfully":deletedData})
     } 
    //  common error 
     catch(err){
        return res.status(500).json({err:"Something went wrong while try to delete product's data from DB ⚠️"})
     }
    
}