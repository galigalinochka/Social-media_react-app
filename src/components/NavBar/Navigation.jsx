import React from 'react';
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.nav}>
          <div>
            <a>Profile</a>
          </div>
          <div>
            <a>Messages</a>
          </div>
          <div>
            <a>News</a>
          </div>
        </nav>
  );
};

export default Navigation;