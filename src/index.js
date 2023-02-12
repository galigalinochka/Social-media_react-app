import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import state from "./redux/State";
import {addPost} from './redux/State';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App state = {state} addPost={addPost}/>
  </React.StrictMode>
);


