const mongoose = require('mongoose')

const blogScheme = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String
    },
    markdown:{
        type:String,
        required:true
    },
    img:{
        data: Buffer,
        contentType: String,
        default:"https://th.bing.com/th/id/OIP.TopGZCyfzM4yXcafYChk1wHaF7?pid=ImgDet&rs=1",
        type:String,
    },
    createdAt:{
        type:Date,
        default:new Date,
    }
})

module.exports  = mongoose.model('Blog', blogScheme)