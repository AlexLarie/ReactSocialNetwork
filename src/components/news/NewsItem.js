import React from "react";
import classes from "./newsitem.module.css";

const NewsItem = (props) => {
   return (
      <div className = {classes.news__item}>
         <div className = {classes.item__info}>
            <div className = {classes.from}>{props.name}</div>
            <div className = {classes.date}>{props.date}</div>
         </div>
            <div className = {classes.text}>{props.text}</div>
            <div className = {classes.likes}>{props.likes}</div>
      </div>
   )
}

export default NewsItem;