import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/Main';
import ProgressBar from './components/ProgressBar';
import { sidebarContext } from './context/sidebarContext';
import './App.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="app-container">
      <sidebarContext.Provider value = {{isOpen, setIsOpen}}>
      <Sidebar />
      <div className="main-layout">
        <Header />
        <div className="herobg">
        <div className="hero">
        <ProgressBar/>
        <MainContent />
        </div>
        </div>
        
      </div>
      
      </sidebarContext.Provider>
    </div>
  );
};

export default App;
