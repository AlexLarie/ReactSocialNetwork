import React from 'react';
import classes from './profile.module.css';

const Profile = (props) => {
   return(
      <div className={`${classes.content__profile} ${classes.profile}`}>
         <div className={classes.profile__img}>
            <img src = "https://via.placeholder.com/100" alt = "avatar"/>
         </div>
         <div className = {classes.profile__text}>
            <div>
               Name:<span id = "name">{props.name}</span>
            </div>
            <div>
               Date of birth:<span id = "date">{props.date}</span>
            </div>
            <div>
               Family?:<span id = "family">{props.family}</span>
            </div>
            <div>
               Web-site:<span id = "web">{props.web}</span>
            </div>
         </div>
      </div>
   )
}

export default Profile;