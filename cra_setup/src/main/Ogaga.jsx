import React from'react';
import "./Ogaga.css";
import logo from "./photo_2024-10-22_21-08-50.jpg";

const Ogaga = ({ setCurrentPage }) => {
    return (
    
      <nav className="nav_bar">
      <img src={logo} alt=""  className="web2"/>
        <ul className="bar">
          <li>
            <a href="#"  onClick={() => setCurrentPage("home")}>HOME</a>
          </li>
          <li>
            <a href="#" onClick={() => setCurrentPage("about")}>ABOUT</a>
          </li>
          <li>
            <a href="#" onClick={() => setCurrentPage("items")}>COURSES</a >
          </li>
          <li>
            <a href="#" onClick={() => setCurrentPage("blog")}>BLOG</a>
          </li>
        </ul>
     
      </nav>
           
    );
  };
  
  export default Ogaga;