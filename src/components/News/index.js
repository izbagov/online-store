import React, { Component } from 'react'
import NewsItem from './NewsItem'

class News extends Component {
  componentDidMount() {
    this.props.fetchData("https://5b10808298bef80014585670.mockapi.io/articles");
  }

  render() {
    const { hasError, isLoading, news } = this.props;

    if(hasError) {
      return <div className="news-list">Error! {hasError.message }</div>
    }

    if(isLoading) {
      return <div className="news-list">Loading...</div>
    }

    return(
      <div className="news-list">
        <div className="news-list__title">Новости</div>
        <div className="news-list__items">
          {news.map(news => <NewsItem key={news.id} data={news} />)}
        </div>
      </div>
    )
  }
}


export default News