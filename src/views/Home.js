import React, { useEffect } from 'react';
// const fetch = require('cross-fetch');

export default function Home() {
  useEffect(() => {
    const load = async () => {
      const resp = await fetch(`http://localhost:7890/sharks`);
      const data = await resp.json();
      console.log(data);
    };
    load();
  }, []);

  return <div>SHARKS RUNNING!</div>;
}
