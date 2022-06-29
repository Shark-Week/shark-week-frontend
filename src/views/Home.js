import React, { useEffect } from 'react';
const fetch = require('cross-fetch');

export default function Home() {
  useEffect(() => {
    const load = async () => {
      const data = await fetch(`http://localhost:7891/sharks`);
      console.log(data);
    };
    load();
  }, []);

  return <div>SHARKS RUNNING!</div>;
}
