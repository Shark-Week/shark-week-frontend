import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// const fetch = require('cross-fetch');

export default function Home() {
  const [shark, setShark] = useState([]);

  useEffect(() => {
    const load = async () => {
      const resp = await fetch(`http://localhost:7890/sharks`);
      const data = await resp.json();
      console.log(data);
      setShark(data);
    };
    load();
  }, []);

  return (
    <>
      <h2>FINS UP :)</h2>
      {shark.map((s) => (
        <Link to={`/shark/${s.id}`} key={s.id}>
          <p>{s.scientific_name}</p>
        </Link>
      ))}

      <Link to={`/makeShark`}>
        <div>create your own shark!</div>
      </Link>
    </>
  );
}
