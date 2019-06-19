import React, { useState } from 'react';
import signin from './Auth';
import './App.css';

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="App">
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="button" onClick={() => signin(email, password)}>Sign In</button>
    </div>
  );
}

export default App;
