import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './authlogin.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate("/blog");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <>
      <section>
        <div className="auth">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              id="email"
              autoComplete="off"
              placeholder="Email"
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p>Forgot Password?</p>
            <button type="submit">Login</button>
          </form>
          <p className="login-message">Create an account?  <Link to="/signup">Signup</Link></p>
        </div>
      </section>
    </>
  );
};

export default Login;
