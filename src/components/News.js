import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

    articles = [
        {
           "source":{
              "id":"bbc-sport",
              "name":"BBC Sport"
           },
           "author":null,
           "title":"Danushka Gunathilaka: Cricketer choked, raped woman, police allege",
           "description":"Danushka Gunathilaka was in Australia for the T20 World Cup when he was arrested on four counts of rape.",
           "url":"http://www.bbc.co.uk/news/world-australia-63566645",
           "urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/D5DA/production/_127564745_gettyimages-1074153686.jpg",
           "publishedAt":"2022-11-09T11:52:43.7551689Z",
           "content":"A Sri Lankan cricketer accused of raping a woman while in Australia for the T20 World Cup choked her so forcefully she was left \"fearing for her life\", court documents allege.\r\nDanushka Gunathilaka, … [+2223 chars]"
        },
        {
           "source":{
              "id":"news-com-au",
              "name":"News.com.au"
           },
           "author":"Nic Savage",
           "title":"‘Unbelievable’: Cricket miracle almost complete",
           "description":"<p>Pakistan is one victory away from completing a T20 World Cup miracle.</p>",
           "url":"https://www.news.com.au/sport/cricket/unbelievable-pakistan-defies-the-odds-to-qualify-for-t20-world-cup-final/news-story/12bc6973d9b896120ffb5fad2e56ba39",
           "urlToImage":"https://content.api.news/v3/images/bin/d09f956c0737aaf73bc81758504f5f5f",
           "publishedAt":"2022-11-09T11:31:00Z",
           "content":"Pakistan is one victory away from completing a T20 World Cup miracle.\r\nAn inspired bowling performance from Shaheen Shah Afridi and another batting masterclass from captain Babar Azam helped Pakistan… [+4914 chars]"
        },
        {
           "source":{
              "id":"espn-cric-info",
              "name":"ESPN Cric Info"
           },
           "author":null,
           "title":"PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
           "description":"Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
           "url":"http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
           "urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
           "publishedAt":"2020-04-27T11:41:47Z",
           "content":"Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
           "source":{
              "id":"espn-cric-info",
              "name":"ESPN Cric Info"
           },
           "author":null,
           "title":"What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
           "description":"Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
           "url":"http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
           "urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
           "publishedAt":"2020-03-30T15:26:05Z",
           "content":"Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
     ]

    constructor(){
        super();
        console.log("I am a constructor from news component");
        this.state = {
            articles: this.articles
        }
    }
    
  render() {
    return (
      <div className="container my-3">
        <h2>News Jonkey - Top Headlines</h2>
        <div className="row">
          
          {this.state.articles.map((element)=>{

            return <div className="col-md-4" key={element.url}>
            <NewsItem
              title={element.title.slice(0,45)}
              description={element.description.slice(0,88)}
              imageUrl={element.urlToImage}
              newsUrl={element.url}           />
          </div>
          })}
          
        </div>
      </div>
    );
  }
}

export default News;
