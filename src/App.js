import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navigation from './components/NavBar/Navigation';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navigation />
      <Profile/>
      <Footer />
    </div>
  );
}

export default App;
