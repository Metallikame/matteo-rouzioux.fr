import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => (
  <div style={{ textAlign: 'center', marginTop: '3rem' }}>
    <h1>🚧 Site actuellement en construction ! 🚧</h1>
    <img
      src="/gif chantier.svg"
      alt="Chantier en construction"
      style={{ width: '250px', marginTop: '2rem' }}
    />
  </div>
);

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
