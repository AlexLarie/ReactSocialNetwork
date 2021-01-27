import React from 'react' ;
import classes from './prev__item.module.css';

const PrevItem = (props) => {
   return(
      <div className = {classes.prev__item}>
         <div className = {classes.prev__img}>
            <img src = "https://via.placeholder.com/100" alt = "avatar" />
         </div>
         <div className = {classes.prev__text}>
            {props.text}
            <div className = {classes.prev__date}>
               {props.date}
            </div>
            <span className = {classes.prev__likes}>
               <button onClick = {props.changeLikes}>like</button><span id = {props.id}>{props.likes}</span>
            </span>
         </div>
      </div>
   )
}

export default PrevItem;