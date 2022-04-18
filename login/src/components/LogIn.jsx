import React from 'react'

const LogIn = () => {
  return (
    <div>
        <form onSubmit={(values) => console.log(values) }>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password' />
            <input type="submit"  placeholder='Login' />
        </form>
    </div>
  )
}

export default LogIn