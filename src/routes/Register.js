import React from 'react'

function Register() {
  return (
    <div className='warper'>
      <h1>Register</h1>
      <form>
        <input type='text' placeholder='Name'/>
        <input type='text' placeholder='Username'/>
        <input type='password' placeholder='Password'/>
        <button>Register</button>
      </form>
    </div>
  )
}

export default Register
