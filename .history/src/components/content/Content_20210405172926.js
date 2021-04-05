import React from 'react';
import Profile from './profile/profile/Profile';
import Post__new from './profile/PostNew/Post__new';
import Post__prev from './profile/PostPrev/PostPrev';
import './content.css';
import Post__new__container from './profile/PostNew/Post__new__container';


const Content = (props) => {
   return(
      <div className = "content">
         <img src = "https://via.placeholder.com/1000x200" alt = "wrapper" className = 'content__img'/>
         <Profile name = 'Alexei' date = '16.03.1995' web = 'alg.by' family = 'Married'/>
         <Post__new__container addPost = {props.addPost} updateNewPostText = {props.updateNewPostText} 
          dispatch = {props.dispatch} newPostText = {props.data.newPostText}
         />
         <Post__prev changeLikes = {props.changeLikes} posts = {props.data.posts}/>
      </div>
   )
}

export default Content;