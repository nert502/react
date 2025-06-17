import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddEditBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({ title: '', author: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/api/books/${id}`)
        .then(res => setBook(res.data))
        .catch(err => console.error(err));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = id
      ? axios.put(`http://localhost:5000/api/books/${id}`, book)
      : axios.post('http://localhost:5000/api/books', book);

    request.then(() => {
      setMessage('Το βιβλίο αποθηκεύτηκε επιτυχώς!');
      setTimeout(() => navigate('/books'), 1500);
    })
    .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? 'Επεξεργασία' : 'Προσθήκη'} Βιβλίου</h2>
      <input
        type="text"
        placeholder="Τίτλος"
        value={book.title}
        onChange={e => setBook({ ...book, title: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Συγγραφέας"
        value={book.author}
        onChange={e => setBook({ ...book, author: e.target.value })}
        required
      />
      <button type="submit">Αποθήκευση</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default AddEditBook;
