import { useState, useEffect } from 'react'; // Nettoyage de l'import ici

function Timer() {
  const [secondes, setSecondes] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSecondes((s) => s + 1);
    }, 1000);

    return () => clearInterval(id); // Nettoyage important
  }, []);

  return (
    <div style={{ border: '1px solid #61dafb', padding: '10px', margin: '10px' }}>
      <p>Temps écoulé : {secondes} secondes</p>
    </div>
  );
}

export default Timer;
