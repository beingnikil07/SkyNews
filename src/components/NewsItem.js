import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description } = this.props; //Destructuring,means this.props mai se
    //title ,description ko extract krr do
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://ichef.bbci.co.uk/news/1024/branded_news/1B6E/production/_128022070_e0404ba4040e9ebe45f075385066b8e3a804ecc70_642_6789_38211000x563.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
