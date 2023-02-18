import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navigation from './components/NavBar/Navigation';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from './components/News/News';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
      <Header />
      <Navigation friends = {props.state.sideBar}/>
      <div className = "content">
      <Routes>
        <Route path="/dialogs" element ={<Dialogs users = {props.state.messagesPage}/>} />
        <Route path="/profile" element ={<Profile posts = {props.state.profilePage}
               dispatch={props.dispatch} />} />
        <Route path="/news" element ={<News/>} />       
      </Routes>
      </div>     
      <Footer />
    </div>
    </BrowserRouter>  
  );
}

export default App;
