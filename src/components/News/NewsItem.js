import React from 'react'
import './style.css'

const NewsItem = ({ data }) => {
  const { title, image } = data
  return <div className="news-item">
      <div className="news-item__top">
        <img src={image} alt="" />
        <div className="news-item__title">{title}</div>
      </div>
    </div>;
}

export default NewsItem