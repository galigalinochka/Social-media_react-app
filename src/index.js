import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

const postsData = [
  { id: "1", message: "How are you?", likesCount: "1"},
  { id: "2", message: "What's the weather like today?", likesCount: "1"},
  { id: "3", message: "Love", likesCount: "3"},
  { id: "4", message: "Museums are nice", likesCount: "11"},
];

const users = [
  { id: "1", name: "Marina", message: "Hallo" }, 
  { id: "2", name: "Marina", message: "Bis bald" },
  { id: "3", name: "Lina", message: "Guten morgen" },
  { id: "4", name: "Mark", message: "Uuuuuu" },
  { id: "5", name: "Mandarina", message: "Miyyyyy" }
];

root.render(
  <React.StrictMode>
    <App posts = {postsData} users ={users}/>
  </React.StrictMode>
);


