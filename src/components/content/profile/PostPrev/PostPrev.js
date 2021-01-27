import React from 'react';
import PrevItem from './PrevItem/PrevItem';
import classes from './post__prev.module.css';

const PostPrev = (props) => {
   let prevPosts = props.posts.map(item => <PrevItem changeLikes = {props.changeLikes} text = {item.text} likes = {item.likes} date = {item.date} id = {item.id}/>)
   return (
      <div className = {classes.prev}>
         {prevPosts}
      </div>
   )
}

export default PostPrev;