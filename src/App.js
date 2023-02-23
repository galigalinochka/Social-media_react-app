import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navigation from './components/NavBar/Navigation';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from './components/News/News';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
      <Header />
      <Navigation />
      <div className = "content">
      <Routes>
        <Route path="/dialogs"
               element ={<DialogsContainer />} />
        <Route path="/profile" element ={<Profile />} />
        <Route path="/news" element ={<News/>} />       
      </Routes>
      </div>     
      <Footer />
    </div>
    </BrowserRouter>  
  );
}

export default App;
