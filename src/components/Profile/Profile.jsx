import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" />
      </div>
      <MyPosts />   
    </div>
  );
};

export default Profile;