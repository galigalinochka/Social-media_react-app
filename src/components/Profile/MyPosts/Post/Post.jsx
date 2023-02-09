import React from 'react';
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className = { classes.item }>
        {props.message}
      </div>
      <div className = {classes.likes}>likes: {props.likesCount}</div>
    </div>
    
  );
};

export default Post;