import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import '../App.css'
let url = "https://difficult-getup-deer.cyclic.app"

export default function Mybooks() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [sortOrder, setSortOrder] = useState('');

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

    const handleFilter = async (genre) => {
      try {
        const response = await fetch(`${url}/api/posts/filter?genre=${genre}`);
        const data = await response.json();
        console.log('Filtered data:', data);
        setFilteredData(data);
        setData(data)
      } catch (error) {
        console.error('Failed to filter data:', error);
      }
    };
  
    const handleSort = async () => {
      try {
        const response = await fetch(`${url}/api/posts/sort`);
        const data = await response.json();
        console.log('Sorted data:', data);
        setFilteredData(data);
        setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
        setData(data)
      } catch (error) {
        console.error('Failed to sort data:', error);
      }
    };
  

  return (
    <div>
        <Navbar />
       <h2>My books</h2>
       <div className="filter-sort">
        <button onClick={() => handleFilter('Fiction')}>Fiction</button>
        <button onClick={() => handleFilter('Science')}>Science</button>
        <button onClick={() => handleFilter('Comic')}>Comic</button>
        <button onClick={handleSort}>Sort by Price</button>
      </div>
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
