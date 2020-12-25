import React from 'react';
import Profile from './profile/profile/Profile';
import Post__new from './profile/PostNew/Post__new';
import Post__prev from './profile/PostPrev/PostPrev';
import './content.css';


const Content = (props) => {
   return(
      <div className = "content">
         <img src = "https://via.placeholder.com/1000x200" alt = "wrapper" className = 'content__img'/>
         <Profile name = 'Alexei' date = '16.03.1995' web = 'alg.by' family = 'Married'/>
         <Post__new addPost = {props.addPost} newPostText = {props.data.newPostText} newTextChange = {props.newTextChange}/>
         <Post__prev posts = {props.data.posts}/>
      </div>
   )
}

export default Content;