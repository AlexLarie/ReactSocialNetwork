import React from "react";
import classes from "./newsitem.module.css";

const NewsItem = (props) => {
   return (
      <div className = {classes.news__item}>
         <div className = {classes.item__info}>
            <div>{props.from}</div>
            <div>{props.date}</div>
         </div>
            <div>{props.text}</div>
            <div>{props.likes}</div>
      </div>
   )
}

export default NewsItem;