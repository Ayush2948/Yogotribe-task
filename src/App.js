import React, { useState } from 'react';
function App() {
  const [fact, setFact] = useState('');

  const fetchCatFact = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_URL);
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      console.error('Error fetching cat fact:', error);
      setFact('Hire Me!');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      
      <p style={{ marginTop: '20px' , backgroundColor: 'lightgray', padding: '10px', fontSize:'35.55px' }}>{fact}</p>
      <button onClick={fetchCatFact} style={{marginBottom: '20px', fontSize: '40px'}}>
        Get Cat Fact
      </button>

    </div>
    
  );
}

export default App;
