import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: 60 }}>
      <h1>Καλώς ήρθες στην εφαρμογή βιβλίων & συγγραφέων!</h1>
      <p>Επίλεξε τι θέλεις να διαχειριστείς:</p>
      <div style={{ fontSize: 20 }}>
        <Link to="/books" style={{ marginRight: 40 }}>📚 Βιβλία</Link>
        <Link to="/authors">✍️ Συγγραφείς</Link>
      </div>
    </div>
  );
}

export default App;
