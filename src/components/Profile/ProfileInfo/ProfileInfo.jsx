import React from 'react';
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className = { classes.img }>
        <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" />
      </div>
      <div>
        avatar+descr
      </div>
    </div>
  );
};

export default ProfileInfo;