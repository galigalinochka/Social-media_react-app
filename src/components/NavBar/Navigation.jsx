import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.nav}>
          <div className = {classes.item}>
            <NavLink to ="/profile" className = {({isActive}) => isActive ? classes.link : ''}>Profile</NavLink>
          </div>
          <div className = {classes.item}>
            <NavLink to ="/dialogs" className = {({isActive}) => isActive ? classes.link : ''}>Messages</NavLink>
          </div>
          <div className = {classes.item}>
            <NavLink to ="/news" className = {({isActive}) => isActive ? classes.link : ''}>News</NavLink>
          </div>
        </nav>
  );
};

export default Navigation;