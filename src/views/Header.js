import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <div>
        <h2>SHARK FIN</h2>
        <Link to={`/SignUp`}>Sign Up</Link>
        <Link to={`/SignIn`}>Sign In</Link>
      </div>
    </>
  );
}
