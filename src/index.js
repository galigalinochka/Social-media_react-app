import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import state, { subscribe } from "./redux/State";
import {addPost, updateNewPostText} from './redux/State';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state = {state}
           addPost={addPost}
           updateNewPostText = {updateNewPostText}/>
    </React.StrictMode>
  );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
