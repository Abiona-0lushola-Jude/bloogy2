import axios from 'axios'
import React, {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import FileBase64 from 'react-filebase64';



const EditBlog = () => {
  const param = useParams('blogId')
  const paramValue = param.blogId


  const navigate = useNavigate()

  const [ prevBlog, setPrevBlog] = useState({
    title:"",
    desc:"",
    markdown:"",
    img:''
  })

 

  useEffect(()=>{
    axios.get(`/oneBlog/${paramValue}`)
  .then(res => setPrevBlog(res.data))
  .catch(err => console.log(err))
    },[paramValue])


  function handleSubmit(event){
    event.preventDefault()

    axios.put(`/blog/update/${prevBlog._id}`, prevBlog)
    .then(res => console.log(res))
    .catch(err => console.log(err))



    window.location.assign('/')
  }

  function handleChange(event){
      const {name, value} = event.target

      setPrevBlog(prevState=>{
        return{
          ...prevState,
          [name]:value
        }
      })
  }




  return (
    <div className='form-container'>
      <h1>Edit Your Blog</h1>
      <form action="/update/blog" method="post">
          <label htmlFor="title">Title: </label>
          <input type="text" 
          name="title" 
          id="title" 
          placeholder='Enter Title'
          value={prevBlog.title}
          onChange={handleChange}
           />
          <label htmlFor="desc">Description: </label>
          <input type="text" 
          name="desc" 
          id="desc" 
          placeholder='Enter Description'
          value={prevBlog.desc}
          onChange={handleChange}
           />
           <label htmlFor="markdown">Edit your Blog:  </label>
           <textarea 
           name="markdown" 
           id="markdown" 
           value={prevBlog.markdown}
           onChange={handleChange}
           />
           <FileBase64
           mutiple={false}
           onDone={({base64})=> setPrevBlog(prevState=> ({...prevState, img:base64}))}
           />
           <div className="btn">
            <button onClick={() => navigate(`/bloggy/${paramValue}`)}>Cancel</button>
            <button type="submit" onClick={handleSubmit}>Update Blog</button>
           </div>
          
        </form>
    </div>
  )
}

export default EditBlog
