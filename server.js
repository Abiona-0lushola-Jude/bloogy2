const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
require('dotenv').config()

// MiddleWare
app.use(express.json({limit: '25mb'}))
app.use(express.urlencoded({limit: '25mb',extended: false}))
app.use(cors())

// Middleware for our router 
app.use('/', require('./Router/routes'))
// Connecting to database
const todoConnection = process.env.TODO_URL
mongoose.connect(todoConnection,()=>{
    console.log("Connected to Database")
})


const blogConnection = process.env.BLOG_URL
mongoose.connect(blogConnection,()=>{
    console.log("Conncted to Database")
})

const path = require('path')

app.use(express.static(path.resolve(__dirname, "./client/build")))
app.get("*", (req,res)=>{
        res.sendFile(path.resolve(__dirname, "./client/build", "index.html"))
})
// Connecting t0 PORT
app.listen(process.env.PORT || 4001, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });