import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import moment from 'moment'

const ReadMoreBlog = () => {
    const navigate = useNavigate()
    const params= useParams('blogId')
    const paramsValue = params.blogId

    const [blog, setBlog] = useState([])
    useEffect(()=>{
        axios.get(`/oneBlog/${paramsValue}`)
      .then(res => setBlog(res.data))
      .catch(err => console.log(err))
    },[paramsValue])
    
  return (
    <div className='read-more'>
            <div className="blog-container" key={blog.title}>
              <div className="readMore-img">
                  <img src={blog.img ? blog.img : `https://th.bing.com/th/id/OIP.TopGZCyfzM4yXcafYChk1wHaF7?pid=ImgDet&rs=1`} alt={`${blog.title} blog`} />
              </div>
              <div className="blog-content">
                <h1 className='readMore-title'>{blog.title}</h1>
                <h4 className='desc'>{blog.desc}</h4>
                <p>{moment(blog.createdAt).format('MMMM Do YYYY')}</p>
                <div className="btn">
                    <button onClick={()=> navigate(-1)}>Cancel</button>
                    <button onClick={()=> navigate(`edit`)}>Edit</button>
                </div>
                <div className='markdown'>
                  <ReactMarkdown>{blog.markdown}</ReactMarkdown>
                  </div>
              </div>
                
            </div>
    </div>
  )
}

export default ReadMoreBlog
