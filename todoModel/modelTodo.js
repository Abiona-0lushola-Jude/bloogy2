const mongoose = require('mongoose')

const todoScheme = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    checked:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:new Date,
    }
})

module.exports = mongoose.model('Todo', todoScheme)