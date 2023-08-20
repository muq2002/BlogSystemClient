import React from 'react'

function Login() {
  return (
    <div className='warper'>
      <h1>Login</h1>
      <form>
        <input type='text' placeholder='Username'/>
        <input type='text' placeholder='Password'/>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
