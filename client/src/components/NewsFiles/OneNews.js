import React from 'react'
import './news.css'

const OneNews = ({news}) => {

  return (
    <div className='news-contained'>
      <h3>{news.title}</h3>
      <button onClick={()=> window.location.assign(news.url)}>View More</button>
    </div>
  )
}

export default OneNews
