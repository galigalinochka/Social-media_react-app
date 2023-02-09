import React from 'react';
import classes from "./MyPosts.module.css";
import Post from './Post/Post';
//import PostData from "../../../index";

const MyPosts = (props) => { 


let postsElements = props.posts.map(post => <Post message ={post.message} likesCount={post.likesCount} />);

   return (
    <div className={classes.postBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;