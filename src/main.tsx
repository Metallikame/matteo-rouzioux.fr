import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => (
  <div style={{ textAlign: "center", marginTop: "3rem" }}>
    <h1>🚧 Site actuellement en construction ! 🚧</h1>
    <div id="animation-container" lang="en" role="img" className="main" aria-label="Lottie animation">
      <div id="animation" className="animation">
        <img
          src="/gif chantier.svg"
          alt="Chantier en construction"
          style={{ width: "250px", marginTop: "2rem" }}
        />
      </div>
    </div>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
