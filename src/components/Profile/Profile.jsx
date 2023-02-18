import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from "./Profile.module.css";
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  debugger;
  return (
    <div className={classes.content}>
      <ProfileInfo />
      <MyPosts posts = {props.posts.postsData}
               newPostText={props.posts.newPostText}
               dispatch={props.dispatch} />   
    </div>
  );
};

export default Profile;