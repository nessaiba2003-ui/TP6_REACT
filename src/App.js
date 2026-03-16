import React, { useState, useEffect } from 'react';
import Compteur from './Compteur';
import Timer from './Timer';

// --- EXERCICE 2 : Le Hook personnalisé useLocalStorage ---
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

function App() {
  // On utilise notre hook personnalisé ici
  const [name, setName] = useLocalStorage('username', 'Étudiant');

  return (
    <div className="App" style={{ textAlign: 'center', backgroundColor: '#282c34', color: 'white', minHeight: '100vh', padding: '20px' }}>
      <h1>Mon TP React - Étape 9</h1>

      <div style={{ marginBottom: '20px' }}>
        <h3>2. Hook LocalStorage</h3>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <p>Bienvenue {name} ! (Ton nom est sauvegardé)</p>
      </div>

      <hr />
      <Compteur />
      <hr />
      <Timer />
    </div>
  );
}

export default App;
