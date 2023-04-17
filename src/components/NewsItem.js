import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, ImageURL, Newsurl, author, date, name} = this.props
    return (
        
      <div>
      
        <div className="card">
        
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'87%'}}>
    {name}
  </span>
  <img src={ImageURL?ImageURL:"https://images.wsj.net/im-744986/social"} className="card-img-top hoverable" alt="..." style={{maxHeight:'160px'}} />
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}.....</p>
    <div className="card-footer">
      <small className="text-body-secondary">by {author? author:"unknown..."} on {new Date(date).toGMTString()}</small>
    </div>
    <a href={Newsurl} target="_blank" className="btn btn-success" rel="noreferrer">Read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
