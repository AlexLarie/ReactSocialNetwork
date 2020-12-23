import React from 'react';
import PrevItem from './prev__item/Prev__item';
import classes from './post__prev.module.css';

let postsData = [
   { id: 1, name: 'You', text: 'Some text 1', likes: '12'},
   { id: 2, name: 'You', text: 'Some text 2', likes: '24'},
   { id: 3, name: 'You', text: 'Some text 3', likes: '28'},
   { id: 1, name: 'You', text: 'Some text 4', likes: '12'},
   { id: 2, name: 'You', text: 'Some text 5', likes: '24'},
]

let prevPosts = postsData.map(item => <PrevItem text = {item.text} likes = {item.likes}/>)

const Post__prev = () => {
   return (
      <div className = {classes.prev}>
         {prevPosts}
      </div>
   )
}

export default Post__prev;