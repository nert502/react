import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import BooksList from './pages/BooksList';
import AuthorsList from './pages/AuthorsList';
import AddEditBook from './pages/AddEditBook';
import AddEditAuthor from './pages/AddEditAuthor';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Η αρχική σελίδα με επιλογή */}
        <Route path="/" element={<App />} />

        {/* Λίστες */}
        <Route path="/books" element={<BooksList />} />
        <Route path="/authors" element={<AuthorsList />} />

        {/* Προσθήκη / Επεξεργασία βιβλίου */}
        <Route path="/books/add" element={<AddEditBook />} />
        <Route path="/books/edit/:id" element={<AddEditBook />} />

        {/* Προσθήκη / Επεξεργασία συγγραφέα */}
        <Route path="/authors/add" element={<AddEditAuthor />} />
        <Route path="/authors/edit/:id" element={<AddEditAuthor />} />

        {/* Αν το path δεν ταιριάζει, πάμε στην αρχική */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
