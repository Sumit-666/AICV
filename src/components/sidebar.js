import React from 'react';
import './sidebar.css';
import { FaSearch, FaClipboardCheck, FaHistory, FaUser, FaCog, FaSignOutAlt, FaListAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>AI CV</h2>
      <ul>
        <li><FaSearch className="icon" /><Link to="/search-cv">Search CV</Link></li>
        <li><FaClipboardCheck className="icon" /><Link to="/shortlisted-cv">Shortlisted CV</Link></li>
        <li><FaListAlt className="icon" /><Link to="/transaction-history">Transaction_History</Link></li>
        <li><FaHistory className="icon" /> <Link to="/search-history">Search History</Link></li>
        <li><FaUser className="icon" /><Link to="/profile">Profile</Link></li>
      </ul>
      <div className="sidebar-footer">
        <ul>
          <li><FaCog className="icon" /><Link to="/settings">Settings</Link></li>
          <li><FaSignOutAlt className="icon" /> <Link to="/signout">Sign Out</Link></li>
        </ul>
      </div>
    </div>

  );
};

export default Sidebar;
