import React from 'react'
import './Login.css';

function Login() {
  return (
    <div>
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="/signup">Sign up</a></p>
      








    </div>
  )
}

export default Login