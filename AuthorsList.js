
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AuthorsList() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/authors')
      .then(res => setAuthors(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/authors/${id}`)
      .then(() => setAuthors(authors.filter(author => author._id !== id)))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Λίστα Συγγραφέων</h1>
      <Link to="/author/add">Προσθήκη Συγγραφέα</Link>
      <ul>
        {authors.map(author => (
          <li key={author._id}>
            {author.name}
            <Link to={`/author/edit/${author._id}`}> Επεξεργασία </Link>
            <button onClick={() => handleDelete(author._id)}>Διαγραφή</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AuthorsList;
