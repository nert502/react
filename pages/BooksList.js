import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function BooksList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/books')
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/books/${id}`)
      .then(() => setBooks(books.filter(book => book._id !== id)))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Λίστα Βιβλίων</h1>
      <Link to="/books/add">Προσθήκη Βιβλίου</Link>
      <ul>
        {books.map(book => (
          <li key={book._id}>
            {book.title} - {book.author}
            <Link to={`/books/edit/${book._id}`}> Επεξεργασία </Link>
            <button onClick={() => handleDelete(book._id)}>Διαγραφή</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BooksList;
