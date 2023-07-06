import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Navbar() {
  return (
    <nav>
      <ul className="navbar">
        <li className="navbar-item">
          <Link to="/addbooks" className="navbar-link">
            Add Books
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/mybooks" className="navbar-link">
            My Books
          </Link>
        </li>
      </ul>
    </nav>
  );
}
