import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
export default function SharkPage() {
  const [shark, setShark] = useState([]);
  const history = useHistory();
  const { id } = useParams();
  console.log(id);

  const handleDelete = async () => {
    console.log('DELETing', id);
    //request options but with a different method.
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(`http://localhost:7890/sharks/${id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
    history.push('/');
    //page redirect to '/'
  };

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
      <div>
        <h1>{shark.scientific_name}</h1>
        <p>Family: {shark.family}</p>
        <p>Kingdom: {shark.kingdom}</p>
        <p>Status: ({shark.living}) </p>
        <p>Did you know that {shark.random_fact}?</p>
      </div>
      <a href={`/shark/${id}/edit`}>
        <p>Edit</p>
      </a>
      <a onClick={handleDelete}>Delete</a>
    </div>
  );
}
