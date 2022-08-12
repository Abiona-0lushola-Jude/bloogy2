import axios from 'axios'
import React from 'react'
import {useNavigate} from 'react-router-dom'

const Blog = ({Data}) => {
  const navigate = useNavigate()


    function handleEdit(event){
      navigate(`bloggy/${event}`)
    }

    function handleDelete(event){
      axios.delete(`/blog/delete/${event}`)
      .then(res => console.log(res))
      .catch(err => console.log(err))


      window.location.reload()
    }

  return (
    <div className='allData-container'>
      <div className="image-container">
        <img src={Data.img ? Data.img : `https://th.bing.com/th/id/OIP.TopGZCyfzM4yXcafYChk1wHaF7?pid=ImgDet&rs=1`} alt={`${Data.title} blog`}/>
      </div>
      <div className="Oneblog-container">
          <h2 className='title'>{Data.title}</h2>
          <p className='desc'>{Data.desc}</p>
        <div className="bttn">
          <button id='cancel' onClick={() => handleEdit(Data._id)}>Read More</button>
          <button id='delete' onClick={()=> handleDelete(Data._id)}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Blog

