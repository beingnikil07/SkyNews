import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date,source} = this.props;
    return (
      <div className="my-3">
        <div className="card text-center" >
          <img
            src={!imageUrl ? "https://media.cnn.com/api/v1/images/stellar/prod/191113111541-us-capitol-impeachment-hearing-1113.jpg?q=x_0,y_156,h_1688,w_3000,c_crop/w_800" : imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:370, zIndex:1}}>
              {source}
            </span>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toDateString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
