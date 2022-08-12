const express = require('express')
const router = express.Router()
const Blog = require('../blogModel/modelBlog')
const Todo = require('../todoModel/modelTodo')
const axios = require('axios')
const cheerio = require('cheerio')
const e = require('express')

router.get('/get/todo', async(req,res)=>{
    try {
        const allTodo = await Todo.find().sort({createdAt: 'desc'})
        res.status(200).json(allTodo)

    } catch (err) {
        res.status(500).json({message: err.message})
    }
})



// Getting All Blog
router.get('/blog', async (req,res)=>{
    try {
        const allBlog = await Blog.find().sort({createdAt: 'desc'})
        res.status(200).json(allBlog)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})




// Getting One Blog
router.get('/oneBlog/:id', async (req,res)=>{
    const dataId = req.params.id
    try {
        const oneBlog = await Blog.findById(dataId)
        res.status(200).json(oneBlog)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

// Deleting One Blog Post

router.delete('/blog/delete/:id', async(req,res)=>{
    const dataId = req.params.id
    try {
        await Blog.findByIdAndDelete(dataId)
        res.status(200).json({message: `Blog with ID ${dataId} has been successfully deleted`})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})


router.post('/blog/post', async (req,res)=>{
    const newBlog = new Blog({
        title: req.body.title,
        desc: req.body.desc,
        markdown: req.body.markdown,
        img: req.body.img
    })
    try {
        const newBlogDone = await newBlog.save()
        res.status(200).json(newBlogDone)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})



// Scrapping the Newspapaer Page
const articles = []
const address = "https://www.theguardian.com/uk/film"

router.get('/news',async (req,res)=>{
    try {
         await axios.get(address)
        .then(response => {
            const html = response.data

            const $ = cheerio.load(html)


            $('a:contains("film")', html).each(function () {
                const title= $(this).text()
                const url= $(this).attr('href')
                articles.push({
                    title,
                    url,
                })
            })
        }).catch(err => console.log(err))
        res.json(articles)
    } catch (err) {
        res.json({err: err.message})
    }
})



// posting todo
router.post('/post/todo', async (req,res)=>{
    const newTodo = new Todo({
        title:req.body.title,
    })
   try {
        const newTodoList = await newTodo.save()
        res.status(200).json(newTodoList)
   } catch (err) {
        res.status(500).json({message: err.message})
   }
})



// Deleting a todo
router.delete('/todo/delete/:id', async (req,res)=>{
    try {
      await Todo.findByIdAndDelete(req.params.id)
      res.json({message: `List Id ${req.params.id} has been deleted`})
    } catch (err) {
        res.status(500).json({message:err.message})
    }
})


// updating  a blog
router.put('/blog/update/:id', (req,res)=>{
 Blog.findByIdAndUpdate(req.params.id, { 
        title: req.body.title,
        desc: req.body.desc,
        markdown: req.body.markdown,
        img: req.body.img
    },
   function (err, docs) {
if (err){
console.log(err)
}
else{
console.log(docs)
}
});

})

module.exports = router