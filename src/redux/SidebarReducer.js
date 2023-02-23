import React from 'react';

const initialState = {
  friends: [
    { id: "1", name: "Marina" }, 
    { id: "2", name: "Marina" },
    { id: "3", name: "Lina"}
  ]
};

const SidebarReducer = (state = initialState) => {
  return state;
};

export default SidebarReducer;