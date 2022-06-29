import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export default function SharkPage() {
  const [shark, setShark] = useState([]);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const load = async () => {
      const response = await fetch(`http://localhost:7890/sharks/${id}`);
      const data = await response.json();
      console.log(data);
      setShark(data);
    };
    load();
  }, []);

  return (
    <div>
      <h1>{shark.scientific_name}</h1>
      <p>Family: {shark.family}</p>
      <p>Kingdom: {shark.kingdom}</p>
      <p>Status: ({shark.living}) </p>
      <p>Did you know that {shark.random_fact}?</p>
    </div>
  );
}
