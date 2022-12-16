import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a7b691c7393a4548a85aa775e8a94b31"
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles })
  }
  render() {
    return (
      <div className="container my-3">
        <h1>Skynews-top headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4 my-2" key={element.url} >

              <NewsItem title={element.title.slice(0, 45)} description={element.description.slice(0, 85)} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
      </div>
    );
  }
}
