import React from 'react';
import Friend from './Friend';
import classes from "./Friend.module.css";

const Friends = (props) => {
  let friendsElements = props.props.friends.map(friend => <Friend id = {friend.id} name = {friend.name} />)
  return (
    <div className = {classes.friends}>
      {friendsElements}  
    </div>
  );
};

export default Friends;