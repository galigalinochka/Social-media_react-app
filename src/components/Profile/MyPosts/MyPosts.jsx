import React from 'react';
import classes from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = (props) => { 
  let postsElements = props.posts.map(post => <Post message ={post.message} likesCount={post.likesCount} />);

  let newPostElemet = React.createRef();

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElemet.current.value;
    props.updateNewPostText(text);
  }

    return (
      <div className={classes.postBlock}>
        <h3>My Posts</h3>
        <div>
          <div>
            <textarea ref={newPostElemet}
            onChange={ onPostChange }
            value = {props.newPostText}></textarea>
          </div>
          <button onClick = { addPost }>Add post</button>
        </div>
        <div className={classes.posts}>
          {postsElements}
        </div>
      </div>
    );
};

export default MyPosts;