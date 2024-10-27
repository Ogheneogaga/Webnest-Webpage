import React from 'react';
import './Sidebar.css'; // Import the CSS file

const Sidebar = ({ setCurrentPage, currentPage }) => {
  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => setCurrentPage("HOME")} className={currentPage === "HOME" ? "active" : ""}>HOME</li>
        <li onClick={() => setCurrentPage("ABOUT")} className={currentPage === "ABOUT" ? "active" : ""}>ABOUT</li>
        <li onClick={() => setCurrentPage("BLOG")} className={currentPage === "BLOG" ? "active" : ""}>BLOG</li>
        <li onClick={() => setCurrentPage("ITEMS")} className={currentPage === "ITEMS" ? "active" : ""}>COURSES</li>
      </ul>
    </div>
  );
};

export default Sidebar;