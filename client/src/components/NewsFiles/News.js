import React, { useEffect, useState } from 'react'
import './news.css'
import axios from 'axios'
import OneNews from './OneNews'



const News = () => {
  const [news, setNews] = useState([])
  useEffect(()=>{
    axios.get('/news')
    .then(res => setNews(res.data))
    .catch(err => console.log(err))
  }, [])
    

  return (
    <div className='news-container'>
      <h1>Movie News</h1>
      {news.map(data=> {
        return(
          <OneNews news={data} key={data} />
        )
      })}
    </div>
  )
}

export default News
