import React, { useState } from 'react';
import Navbar from "./Navbar"
import '../App.css'
let url = "https://difficult-getup-deer.cyclic.app"

export default function AddBooks() {
    const [title, settitle] = useState('');
    const [author, setauthor] = useState('');
    const [genre, setgenre] = useState('');
    const [description, setdescription] = useState('');
    const [price, setprice] = useState('');
  
  
  const handleSubmit = async (e) => {
      e.preventDefault();
    
      const postData = {
        title,
        author,
        genre,
        description,
        price,
      };
      try {
        const response = await fetch(`${url}/api/posts`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
        });
        const data = await response.json();
        console.log('Data stored successfully:', data);
        settitle('');
        setauthor('');
        setgenre('');
        setdescription('');
        setprice('');
        alert('Post successfully');
      } catch (error) {
        console.error('Failed to store data:', error);
      }
    };

  return (
    <div>
     <Navbar />
      <h2>Add Books</h2>
      <form className="add-book-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setauthor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre:</label>
          <select
            id="genre"
            value={genre}
            onChange={(e) => setgenre(e.target.value)}
            required
          >
            <option value="">Select genre</option>
            <option value="Fiction">Fiction</option>
            <option value="Science">Science</option>
            <option value="Comic">Comic</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:  </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setprice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
