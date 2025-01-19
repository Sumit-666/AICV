import React from 'react';
import Sidebar from './components/sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchCV from './components/pages/search-cv';
import ShortlistedCV from './components/pages/shortlisted-cv';
import TransactionHistory from './components/pages/transaction-history';
import SearchHistory from './components/pages/search-history';
import Profile from './components/pages/profile';
import Settings from './components/pages/settings';
import ProfileImage from './components/images/2335129.png'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        
        <div className="main-content">
          <Routes>
            <Route path="/search-cv" element={<SearchCV />} />
            <Route path="/shortlisted-cv" element={<ShortlistedCV />} />
            <Route path="/transaction-history" element={<TransactionHistory />} />
            <Route path="/search-history" element={<SearchHistory />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
          </div>
          <div className="profile-button">
          <div className="profile-container">
          <span className="username">Hi, Username</span>
          <img src={ProfileImage} alt="Profile" />
          </div>
        </div>
        </div>
     
    </Router>
  );
}

export default App;
