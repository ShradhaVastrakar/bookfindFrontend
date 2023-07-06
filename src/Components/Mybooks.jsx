import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import '../App.css'
let url = "https://difficult-getup-deer.cyclic.app"

export default function Mybooks() {
    const [data, setData] = useState([]);

    useEffect(() => {
   
      fetch(`${url}/api/posts`)
        .then((response) => response.json())
        .then((data) => {
          console.log('Retrieved data:', data);
          setData(data);
        })
        .catch((error) => {
          console.error('Failed to retrieve data:', error);
        });
    }, []);
    const handleDelete = async (id) => {
      try {

        await fetch(`${url}/api/posts/${id}`, {
          method: 'DELETE',
        });
        alert('Data deleted successfully');
   
        setData(data.filter((entry) => entry._id !== id));
      } catch (error) {
        console.error('Failed to delete data:', error);
      }
    };

  return (
    <div>
        <Navbar />
       <h2>My books</h2>
      {data.map((entry) => (
        <div key={entry._id} className="book-card">
          <p>Title: {entry.title}</p>
          <p>Author: {entry.author}</p>
          <p>Genre: {entry.genre}</p>
          <p>Description: {entry.description}</p>
          <p>Price: {entry.price}</p>
          <button onClick={() => handleDelete(entry._id)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  )
}
