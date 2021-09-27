import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <>
      <div className="mobile-container">
        <div className="container">
          <div className="title">
            <h2>Contact Manager</h2>
          </div>
          <div className="header-input">
            <h3>Contact List</h3>
            <button>Add Contact</button>
          </div>
          <div className="header-search">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="contact-list"></div>
        </div>
      </div>
    </>
  );
}
