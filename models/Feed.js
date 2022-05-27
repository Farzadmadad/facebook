const mongoose =require('mongoose')
const Schema =mongoose.Schema

const feedSchema= new Schema({
    title :{
        type:String,
        require:true,
        minlenght:15
    },
    post :{
        type:String,
        require:true,
        minlenght:40
    },
    created_at:{
        type:Date,
        default:Date.now()
    }
},{timestamps:true})
const Feed =mongoose.model('Feed',feedSchema)
module.exports={
    Feed
}