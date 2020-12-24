import React from 'react';
import PrevItem from './PrevItem/PrevItem';
import classes from './post__prev.module.css';

const PostPrev = (props) => {
   let prevPosts = props.posts.map(item => <PrevItem text = {item.text} likes = {item.likes}/>)
   return (
      <div className = {classes.prev}>
         {prevPosts}
      </div>
   )
}

export default PostPrev;