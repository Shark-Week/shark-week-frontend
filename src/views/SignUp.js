import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  const submitForm = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    };
    fetch(`http://localhost:7890/api/v1/users`, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
    history.push(`/`);
  };

  return (
    <div>
      <h2>Sign Up!!!</h2>{' '}
      <label>
        {' '}
        Email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        {' '}
        Password:
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button onClick={submitForm}>Submit</button>
    </div>
  );
}
