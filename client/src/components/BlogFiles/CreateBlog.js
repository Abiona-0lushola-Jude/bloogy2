import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../../components/form.css'
import FileBase64 from 'react-filebase64';
import axios from 'axios';


const CreateBlog = () => {
    const navigate = useNavigate()

  const [form, setForm ] = useState({
    title:'',
    desc:'',
    markdown:'',
    img:''
  })
  
  const handleChange = (event) => {
    const {name, value} = event.target
    setForm(prevState=>{
      return{
        ...prevState,
        [name]:value
      }
    })
  }

  function handleSubmit(event){
    event.preventDefault()
    
    axios.post('/blog/post', form)
    .then(res => console.log(res))
    .catch(err => console.log(err))

    navigate('/')
    window.location.reload()
  }
  return (
    <div className='form-container'>
      <h1>Create A Blog</h1>
        <form action="/create/blog" method="post">
          <label htmlFor="title">Title: </label>
          <input type="text" 
          name="title" 
          id="title" 
          placeholder='Enter Title'
          value={form.title}
          onChange={handleChange}
           />
          <label htmlFor="desc">Description: </label>
          <input type="text" 
          name="desc" 
          id="desc" 
          placeholder='Enter Description'
          value={form.desc}
          onChange={handleChange}
           />
           <label htmlFor="markdown">Add your Blog:  </label>
           <textarea 
           name="markdown" 
           id="markdown" 
           value={form.markdown}
           onChange={handleChange}
           />
           <FileBase64
            multiple={ false }
            onDone={({base64})=> setForm(prevState=> ({...prevState, img:base64})) } 
            />
           <div className="btn">
            <button onClick={() => navigate('/') }>Cancel</button>
            <button type="submit" onClick={handleSubmit}>Add Blog</button>
           </div>
          
        </form>
    </div>
  )
}

export default CreateBlog
