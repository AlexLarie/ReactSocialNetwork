import React from 'react';
import Profile from './profile/profile/Profile';
import Post__new from './profile/post__new/Post__new';
import Post__prev from './profile/post__prev/Post__prev';
import './content.css';

const Content = () => {
   return(
      <div className = "content">
         <img src = "https://via.placeholder.com/1000x200" alt = "wrapper"/>
         <Profile name = 'Alexei' date = '16.03.1995' web = 'alg.by' family = 'Married'/>
         <Post__new/>
         <Post__prev/>
      </div>
   )
}

export default Content;