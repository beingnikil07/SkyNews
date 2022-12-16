import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articals = [
    {
      status: "ok",
      totalResults: 36,
      articles: [
        {
          source: { id: null, name: "BBC News" },
          author: "https://www.facebook.com/bbcnews",
          title:
            "Ukraine war: Kyiv says Russia planning major ground offensive in new year - BBC",
          description:
            "President Zelensky and senior officials warn that Kyiv and its allies must guard against complacency.",
          url: "https://www.bbc.com/news/world-europe-63995244",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/1B6E/production/_128022070_e0404ba4040e9ebe45f075385066b8e3a804ecc70_642_6789_38211000x563.jpg",
          publishedAt: "2022-12-16T03:49:42Z",
          content:
            "Ukraine has accused Russia of planning a wide-ranging ground offensive for early in the new year, despite recent Russian military setbacks.\r\nPresident Volodymyr Zelensky and senior officials have war… [+3003 chars]",
        },
        {
          source: { id: null, name: "Niners Nation" },
          author: "Kyle Posey",
          title:
            "49ers vs. Seahawks 4th quarter thread: One more score and the NFC West is yours - Niners Nation",
          description: "Seattle is currently driving",
          url: "https://www.ninersnation.com/2022/12/15/23512156/49ers-vs-seahawks-4th-quarter-thread-one-more-score-and-the-nfc-west-is-yours",
          urlToImage:
            "https://cdn.vox-cdn.com/thumbor/tKXj748FijnTgrchV4GoX1THk54=/0x0:4438x2324/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24295636/1449496251.jpg",
          publishedAt: "2022-12-16T03:29:34Z",
          content:
            "© 2022 Vox Media, LLC. All Rights Reserved\r\n* 21+ (19+ CA-ONT) (18+ NH/WY). AZ, CO, CT, IL, IN, IA, KS, LA, (select parishes), MD, MI, NH, NJ, NY, OR, PA, TN, VA, WV, WY, CA-ONT only.Eligibility rest… [+124 chars]",
        },
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
          source: { id: null, name: "ESPN" },
          author: "Jesse Rogers",
          title:
            "Carlos Rodon joining Yankees on 6-year, $162M deal, sources say - ESPN",
          description:
            "The New York Yankees and free agent left-hander Carlos Rodon have agreed on a six-year, $162 million contract, sources told ESPN's Jeff Passan on Thursday.",
          url: "https://www.espn.com/mlb/story/_/id/35260565/carlos-rodon-joining-yankees-6-year-162m-deal-sources-say",
          urlToImage:
            "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0727%2Fr1040997_1296x729_16%2D9.jpg",
          publishedAt: "2022-12-16T02:49:14Z",
          content:
            "Left-handed starter Carlos Rodon is in agreement with the New York Yankees on a six-year, $162 million deal, sources told ESPN's Jeff Passan on Thursday.\r\nRodon, 30, was the top pitcher left on the m… [+2731 chars]",
        },
        {
          source: { id: "cnn", name: "CNN" },
          author: "Oliver Darcy",
          title:
            "Elon Musk's Twitter bans accounts of CNN, NYT, WaPo journalists - CNN",
          description:
            "Twitter on Thursday evening banned the accounts of several high-profile journalists from top news organizations without explanation, apparently marking a significant attempt by new owner Elon Musk to wield his unilateral authority over the platform.",
          url: "https://www.cnn.com/2022/12/15/media/twitter-musk-journalists-hnk-intl/index.html",
          urlToImage:
            "https://media.cnn.com/api/v1/images/stellar/prod/221216093357-twitter-logo.jpg?c=16x9&q=w_800,c_fill",
          publishedAt: "2022-12-16T02:31:00Z",
          content:
            "Twitter on Thursday evening banned the accounts of several high-profile journalists from top news organizations without explanation, apparently marking a significant attempt by new owner Elon Musk to… [+4110 chars]",
        },
        {
          source: { id: null, name: "Deadline" },
          author: "Anthony D'Alessandro",
          title:
            "‘Avatar: The Way Of Water’ Thursday Box Office Around $17M In First Look - Deadline",
          description:
            "EXCLUSIVE: We are hearing from our sources that James Cameron’s sequel to his highest grossing movie in the world, Avatar: The Way of Water, is currently on its way to a $17M Thursday night from showtimes that began at 3PM. As we always, these figures may flu…",
          url: "https://deadline.com/2022/12/avatar-the-way-of-water-box-office-1235200714/",
          urlToImage:
            "https://deadline.com/wp-content/uploads/2022/12/avatar-2.jpg?w=1024",
          publishedAt: "2022-12-16T02:21:00Z",
          content:
            "EXCLUSIVE: We are hearing from our sources that James Cameron’s sequel to his highest grossing movie in the world, Avatar: The Way of Water, is currently on its way to a $17M Thursday night from show… [+3090 chars]",
        },
        {
          source: { id: "fox-news", name: "Fox News" },
          author: "Greg Wehner",
          title:
            "Texas federal court stays termination of 'Remain in Mexico' policy - Fox News",
          description:
            "President's Biden's attempt to terminate the Trump-era \"Remain in Mexico\" policy was shot down by a U.S. District Court judge this week.",
          url: "https://www.foxnews.com/us/texas-federal-court-stays-termination-remain-mexico-policy",
          urlToImage:
            "https://static.foxnews.com/foxnews.com/content/uploads/2022/09/US-Border.jpg",
          publishedAt: "2022-12-16T02:15:15Z",
          content:
            'President Bidens effort to terminate a Trump-era policy called, "Remain in Mexico," was stayed by a U.S. District Court Judge this week after litigation bounced between several different courts.\r\n"Th… [+3733 chars]',
        },
        {
          source: { id: null, name: "New York Post" },
          author: "Steven Nelson",
          title:
            "Biden jokes about plan to visit Africa, tells leaders he may 'eat your food' - New York Post ",
          description:
            "Biden told an audience of corrupt relatives that he was like a “poor relative.”",
          url: "https://nypost.com/2022/12/15/biden-jokes-about-plan-to-visit-africa-tells-leaders-he-may-eat-all-your-food/",
          urlToImage:
            "https://nypost.com/wp-content/uploads/sites/2/2022/12/biden-african-leader-may-eat-all-food-0010.jpg?quality=75&strip=all&w=1024",
          publishedAt: "2022-12-16T01:44:00Z",
          content:
            "WASHINGTON President Biden turned heads Thursday by jokingly telling African leaders that he plans to visit their continent, but that he might ravenously “eat your food.”\r\nThe 80-year-old president m… [+4004 chars]",
        },
        {
          source: { id: null, name: "YouTube" },
          author: null,
          title:
            "Stephen 'tWitch' Boss' Cause of Death Confirmed - Entertainment Tonight",
          description:
            "The Los Angeles Medical Examiner has confirmed that Stephen 'tWitch' Boss died from a self-inflicted gunshot wound to the head.",
          url: "https://www.youtube.com/watch?v=d67cLclMZVI",
          urlToImage: "https://i.ytimg.com/vi/d67cLclMZVI/maxresdefault.jpg",
          publishedAt: "2022-12-16T01:30:10Z",
          content: null,
        },
        {
          source: { id: null, name: "Hollywood Reporter" },
          author: "Borys Kit",
          title:
            "Henry Cavill’s Next Play: ‘Warhammer 40,000’ Series for Amazon - Hollywood Reporter",
          description:
            "Logo text Henry Cavill may not be donning a red cape, but he does have a cool new gig. The actor, who Wednesday officially hung up his Man of Steel cape after Warner Bros. announced it is going in a new Superman direction thanks to DC Studio heads James Gunn …",
          url: "https://www.hollywoodreporter.com/tv/tv-news/henry-cavill-warhammer-40000-amazon-1235283251/",
          urlToImage:
            "https://www.hollywoodreporter.com/wp-content/uploads/2022/12/split_2_16x9_template_v1-copy-10.jpg?w=1024",
          publishedAt: "2022-12-16T01:16:30Z",
          content:
            "Henry Cavill may not be donning a red cape, but he does have a cool new gig.\r\nThe actor, who Wednesday officially hung up his Man of Steel cape after Warner Bros. announced it is going in a new Super… [+1892 chars]",
        },
        {
          source: { id: null, name: "CNBC" },
          author: "Evelyn Cheng",
          title:
            "China’s sudden ‘reopening’ reveals new challenges as infections soar - CNBC",
          description:
            "Mainland China's swift rollback of many Covid-related restrictions has been unexpectedly sudden, revealing a new set of economic challenges.",
          url: "https://www.cnbc.com/2022/12/16/chinas-sudden-reopening-reveals-new-economic-challenges.html",
          urlToImage:
            "https://image.cnbcfm.com/api/v1/image/107166621-1671074852524-gettyimages-1245599246-AFP_333N2YD.jpeg?v=1671152485&w=1920&h=1080",
          publishedAt: "2022-12-16T01:01:00Z",
          content:
            "People line up outside a fever clinic in Beijing on Dec. 14, 2022, just days after the country relaxed its Covid controls amid below-freezing weather in the capital city.\r\nBEIJING Mainland China's sw… [+4408 chars]",
        },
        {
          source: { id: null, name: "The Boston Globe" },
          author: null,
          title:
            "Claudine Gay named 30th president of Harvard University, and will be first Black leader - The Boston Globe",
          description:
            "Claudine Gay, a current Harvard University dean, has been elected the next president of the university and will begin in the post on July 1, replacing Lawrence Bacow.",
          url: "https://www.bostonglobe.com/2022/12/15/metro/claudine-gay-named-next-president-harvard-university/",
          urlToImage:
            "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/-Ax4eHOY6O50Rrm5GRPYMYePeGU=/506x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/N73JOK53NQGIQPWBYQY3YG5IYU.jpg",
          publishedAt: "2022-12-16T00:52:18Z",
          content:
            "In her first public comments following the announcement, Gay challenged the traditional notions of the ivory tower, and seemed eager to expand Harvards reach to new communities and groups, including … [+5489 chars]",
        },
        {
          source: { id: null, name: "YouTube" },
          author: null,
          title:
            "Invasive strep A among children being investigated by CDC after UK reports several deaths - FOX 4 Dallas-Fort Worth",
          description:
            "While strep A is typically a common infection that can be easily treated, what is concerning some experts is an increase in an invasive form of strep that ca...",
          url: "https://www.youtube.com/watch?v=Mbfx6I6hCZc",
          urlToImage: "https://i.ytimg.com/vi/Mbfx6I6hCZc/maxresdefault.jpg",
          publishedAt: "2022-12-16T00:35:59Z",
          content: null,
        },
        {
          source: { id: null, name: "NBC 5 Dallas-Fort Worth" },
          author: "Frank Heinz, Ahraya Burns, Scott Gordon",
          title:
            "Former Texas Officer Found Guilty of Manslaughter in Shooting Death of Atatiana Jefferson at Her Home - NBC 5 Dallas-Fort Worth",
          description:
            "Former Fort Worth, Texas police officer Aaron Dean was found guilty of manslaughter in the 2019 shooting death of Atatiana Jefferson on Thursday.",
          url: "https://www.nbcdfw.com/news/local/watch-aaron-dean-found-guilty-of-manslaughter-in-the-death-of-atatiana-jefferson/3149743/",
          urlToImage:
            "https://media.nbcdfw.com/2022/12/Aaron-Dean-Murder-Trial-1.jpg?quality=85&strip=all&resize=1200%2C675",
          publishedAt: "2022-12-15T22:38:00Z",
          content:
            "<ul><li>Aaron Dean was accused of murder for the October 2019 fatal shooting of Atatiana Jefferson; jurors could either find him not guilty, guilty of murder, or guilty of manslaughter.</li><li>A Tar… [+13956 chars]",
        },
        {
          source: { id: "axios", name: "Axios" },
          author: "Herb Scribner",
          title:
            "JFK secret files: National Archives releases records on President John F. Kennedy's assassination - Axios",
          description:
            "President Biden on Thursday authorized most of the remaining records to be released.",
          url: "https://www.axios.com/2022/12/15/jfk-assassination-records-national-archives-release",
          urlToImage:
            "https://images.axios.com/u6yZX2jjwRmhZandHCSijlS5IS4=/0x300:3436x2233/1366x768/2022/12/15/1671133397620.jpg",
          publishedAt: "2022-12-15T22:04:16Z",
          content:
            "The National Archives on Thursday released thousands of secret documents related to the assassination of President John F. Kennedy.\r\nDriving the news: In a memo, President Biden authorized more than … [+1762 chars]",
        },
        {
          source: { id: null, name: "YouTube" },
          author: null,
          title:
            "Will We See Salty Tua in the Buffalo Cold in Dolphins vs Bills on Saturday? | The Rich Eisen Show - The Rich Eisen Show",
          description:
            "Rich Eisen breaks down how the frigid weather forecasted for Buffalo on Saturday could impact the Bills vs Dolphins, especially Tua Tagovailoa’s passing game...",
          url: "https://www.youtube.com/watch?v=2wI41YkzEvA",
          urlToImage: "https://i.ytimg.com/vi/2wI41YkzEvA/maxresdefault.jpg",
          publishedAt: "2022-12-15T22:00:01Z",
          content: null,
        },
        {
          source: { id: "cnn", name: "CNN" },
          author: "Eric Bradner",
          title: "Schumer and Pelosi say Biden should run in 2024 - CNN",
          description:
            'Senate Majority Leader Chuck Schumer and outgoing House Speaker Nancy Pelosi, both said President Joe Biden should seek reelection in 2024 after what they described as an "excellent" first two years in office.',
          url: "https://www.cnn.com/2022/12/15/politics/schumer-pelosi-interview/index.html",
          urlToImage:
            "https://media.cnn.com/api/v1/images/stellar/prod/221215155955-03-pelosi-schumer-interview.jpg?c=16x9&q=w_800,c_fill",
          publishedAt: "2022-12-15T21:40:00Z",
          content:
            "Tune in for Jamie Gangels full interview with House Speaker Nancy Pelosi and Senate Majority Leader Chuck Schumer on Anderson Cooper 360 at 8 p.m. ET.\r\nSenate Majority Leader Chuck Schumer and outgoi… [+2765 chars]",
        },
        {
          source: { id: "cnn", name: "CNN" },
          author: "Ashley Strickland",
          title:
            "'Rail cars' of material released after NASA spacecraft hit asteroid - CNN",
          description:
            "When NASA's Double Asteroid Redirection Test spacecraft slammed into the tiny asteroid Dimorphos, the impact sent millions of pounds of rock and dust into space. The blast of released material provided the asteroid with more momentum than the DART spacecraft.",
          url: "https://www.cnn.com/2022/12/15/world/dart-mission-momentum-results-scn/index.html",
          urlToImage:
            "https://media.cnn.com/api/v1/images/stellar/prod/221215153402-02-dart-impact-aftermath-didymos.jpg?c=16x9&q=w_800,c_fill",
          publishedAt: "2022-12-15T21:11:00Z",
          content:
            "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nWhen NASAs Double Asteroid Redirection Test spacecraft… [+2857 chars]",
        },
        {
          source: { id: null, name: "Gizmodo.com" },
          author: "Florence Ion",
          title:
            "Dell's Concept Luna Modular Laptop Comes Apart in Seconds - Gizmodo",
          description:
            "Concept Luna promises full modularity, so you can make repairs in seconds. But it's still just that—a concept.",
          url: "https://gizmodo.com/dell-concept-luna-modular-laptop-design-ces-2023-repair-1849900078",
          urlToImage:
            "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/958189df1235ae60d40eda5e80a6e91c.png",
          publishedAt: "2022-12-15T20:45:00Z",
          content:
            "Dell, one of the worlds major PC makers, is working on bringing more user-friendly repairability to its laptops. It teased us last year with an early version of Concept Luna, which promised to use fe… [+2435 chars]",
        },
      ],
    },
  ];

  // Constructor se aap state ko change aur set bhi krr sakte ho
  //automatically called when object of class created
  // must write it within constructor
  // State aap jvv use karte hai jvv aap usko baar naar change kro,aur aap chaho aapko wo 
  //change hota hua dikhe bina page ko reload kiye  
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
          <div className="col-md-4 my-2">
            <NewsItem title="my title" description="my description" newsUrl="Todo" />
          </div>
          <div className="col-md-4 my-2">
            <NewsItem title="my title" description="my description" />
          </div>
          <div className="col-md-4 my-2">
            <NewsItem title="my title" description="my description" />
          </div>
        </div>
      </div>
    );
  }
}
