import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddEditAuthor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [author, setAuthor] = useState({ name: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/api/authors/${id}`)
        .then(res => setAuthor(res.data))
        .catch(err => console.error(err));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = id
      ? axios.put(`http://localhost:5000/api/authors/${id}`, author)
      : axios.post('http://localhost:5000/api/authors', author);

    request.then(() => {
      setMessage('Ο συγγραφέας αποθηκεύτηκε επιτυχώς!');
      setTimeout(() => navigate('/authors'), 1500);
    })
    .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? 'Επεξεργασία' : 'Προσθήκη'} Συγγραφέα</h2>
      <input
        type="text"
        placeholder="Όνομα"
        value={author.name}
        onChange={e => setAuthor({ ...author, name: e.target.value })}
        required
      />
      <button type="submit">Αποθήκευση</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default AddEditAuthor;
