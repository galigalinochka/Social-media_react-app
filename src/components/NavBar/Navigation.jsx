import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./Navigation.module.css";
import FriendsContainer from './Friends/FriendsContainer';

const Navigation = () => {

  return (
    <nav className={classes.navigation}>
        <div className = {classes.nav}>
          <div className = {classes.item}>
            <NavLink to ="/profile" className = {({isActive}) => isActive ? classes.link : ''}>Profile</NavLink>
          </div>
          <div className = {classes.item}>
            <NavLink to ="/dialogs" className = {({isActive}) => isActive ? classes.link : ''}>Messages</NavLink>
          </div>
          <div className = {classes.item}>
            <NavLink to ="/news" className = {({isActive}) => isActive ? classes.link : ''}>News</NavLink>
          </div>
        </div>
        <div className = {classes.item}>
          {/*<NavLink to ="/friends" className = {({isActive}) => isActive ? classes.link : ''}>Friends:</NavLink>*/}
          <h3>Friends:</h3>
          <FriendsContainer/>
        </div>
    </nav>
  );
};

export default Navigation;