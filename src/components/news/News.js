import React from "react";
import classes from "./news.module.css";
import NewsItem from "./NewsItem";

const News = (props) => {
   console.log(props.data.news)
   let news = props.data.news.map(item => <NewsItem text = {item.text} name = {item.name} likes = {item.likes} date = {item.date} id = {item.id}/>
   )
   return (
      <div className = {classes.news}>
         News
         {news}
      </div>
   )
}

export default News;