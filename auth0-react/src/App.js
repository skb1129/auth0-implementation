import React, { useState } from 'react';
import signin, { authenticateMFA } from './Auth';
import './App.css';

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [otp, setOtp] = useState('')
  return (
    <div className="App">
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="button" onClick={() => signin(email, password)}>Sign In</button>
      <br />
      <input type="text" value={otp} onChange={e => setOtp(e.target.value)} />
      <button type="button" onClick={() => authenticateMFA(otp)}>Verify OTP</button>
    </div>
  );
}

export default App;
