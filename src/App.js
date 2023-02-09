import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navigation from './components/NavBar/Navigation';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from './components/News/News';
//import {users, PostData} from './index';

const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className="app-wrapper">
      <Header />
      <Navigation />
      
      <div className = "content">
      <Routes>
        <Route path="/dialogs" element ={<Dialogs users = {props.users}/>} />
        <Route path="/profile" element ={<Profile posts = {props.posts}/>} />
        <Route path="/news" element ={<News/>} />
      </Routes>
      </div>
      
      <Footer />
    </div>
    </BrowserRouter>  
  );
}

export default App;
