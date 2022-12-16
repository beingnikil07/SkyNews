import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
 /*
  articals = [
    {

      source: { id: "associated-press", name: "Associated Press" },
      author: "Jim Mustian",
      title:
        "Louisiana officers charged in Black motorist's deadly arrest - The Associated Press - en Español",
      description:
        "FARMERVILLE, La. (AP) — Five Louisiana law enforcement officers were charged Thursday with state crimes ranging from negligent homicide to malfeasance in the deadly 2019 arrest of Ronald Greene, a death authorities initially blamed on a car crash before long …",
      url: "https://apnews.com/article/crime-louisiana-john-bel-edwards-law-enforcement-966625e9316f0960d4c1728823a36b63",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/d7832d4c084d44aaa278adb6dd8b1860/2405.webp",
      publishedAt: "2022-12-16T03:00:05Z",
      content:
        "FARMERVILLE, La. (AP) Five Louisiana law enforcement officers were charged Thursday with state crimes ranging from negligent homicide to malfeasance in the deadly 2019 arrest of Ronald Greene, a deat… [+7680 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Clare Foran, Ali Zaslav, Ted Barrett",
      title:
        "Senate passes stopgap bill to avert shutdown at end of the week - CNN",
      description:
        "The Senate voted on Thursday evening to pass a stopgap bill to avert a government shutdown at the end of this week with funding currently set to expire on Friday at midnight.",
      url: "https://www.cnn.com/2022/12/15/politics/government-funding-senate-vote/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/191113111541-us-capitol-impeachment-hearing-1113.jpg?q=x_0,y_156,h_1688,w_3000,c_crop/w_800",
      publishedAt: "2022-12-16T02:55:00Z",
      content:
        "The Senate voted on Thursday evening to pass a stopgap bill to avert a government shutdown at the end of this week with funding currently set to expire on Friday at midnight. \r\nThe vote was 71 to 19.… [+2663 chars]",
    },
    {
      "source": { "id": "fox-news", "name": "Fox News" },
      "author": "Greg Wehner",
      "title": "Texas federal court stays termination of 'Remain in Mexico' policy - Fox News",
      "description": "President's Biden's attempt to terminate the Trump-era \"Remain in Mexico\" policy was shot down by a U.S. District Court judge this week.",
      "url": "https://www.foxnews.com/us/texas-federal-court-stays-termination-remain-mexico-policy",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/09/US-Border.jpg",
      "publishedAt": "2022-12-16T02:15:15Z",
      "content": "President Bidens effort to terminate a Trump-era policy called, \"Remain in Mexico,\" was stayed by a U.S. District Court Judge this week after litigation bounced between several different courts.\r\n\"Th… [+3733 chars]"
    },
    {
      "source": { "id": null, "name": "New York Post" },
      "author": "Steven Nelson",
      "title": "Biden jokes about plan to visit Africa, tells leaders he may 'eat your food' - New York Post ",
      "description": "Biden told an audience of corrupt relatives that he was like a “poor relative.”",
      "url": "https://nypost.com/2022/12/15/biden-jokes-about-plan-to-visit-africa-tells-leaders-he-may-eat-all-your-food/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/12/biden-african-leader-may-eat-all-food-0010.jpg?quality=75&strip=all&w=1024",
      "publishedAt": "2022-12-16T01:44:00Z",
      "content": "WASHINGTON President Biden turned heads Thursday by jokingly telling African leaders that he plans to visit their continent, but that he might ravenously “eat your food.”\r\nThe 80-year-old president m… [+4004 chars]"
    },
  ]
  */

  async componentDidMount(){
    let url ="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a7b691c7393a4548a85aa775e8a94b31"
    let data=await fetch(url);
    let parsedData=await data.json()
    console.log(parsedData)
    this.setState({articles: parsedData.articles})
  }
  constructor() {
    super();
    this.state = {
      articals: this.articals,
      loading: false
    }
  }
  render() {
    return (
      <div className="container my-3">
        <h1>Skynews-top headlines</h1>
        <div className="row">
          {this.state.articals.map((element) => {
            return <div className="col-md-4 my-2" key={element.url} >
               console.log(element.articles)
              <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,85)} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
      </div>
    );
  }
}
