import React, { useState } from 'react';

export default function AddShark() {
  const [scientific_name, setScientific_name] = useState('');
  const [family, setFamily] = useState('');
  const [kingdom, setKingdom] = useState('');
  const [living, setLiving] = useState('');
  const [random_fact, setRandom_Fact] = useState('');

  const submitForm = async () => {
    console.log('science', scientific_name);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        scientific_name,
        family,
        kingdom,
        living,
        random_fact,
      }),
    };
    fetch('http://localhost:7890/sharks', requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <label>
        {' '}
        Name:
        <input
          type="text"
          value={scientific_name}
          onChange={(e) => setScientific_name(e.target.value)}
        />
      </label>

      <label>
        {' '}
        Family:
        <input
          type="text"
          value={family}
          onChange={(e) => setFamily(e.target.value)}
        />
      </label>

      <label>
        {' '}
        Kingdom:
        <input
          type="text"
          value={kingdom}
          onChange={(e) => setKingdom(e.target.value)}
        />
      </label>

      <label>
        {' '}
        Living:
        <input
          type="text"
          value={living}
          onChange={(e) => setLiving(e.target.value)}
        />
      </label>

      <label>
        {' '}
        random_fact:
        <input
          type="text"
          value={random_fact}
          onChange={(e) => setRandom_Fact(e.target.value)}
        />
      </label>

      <button onClick={submitForm}>Submit</button>
    </div>
  );
}
