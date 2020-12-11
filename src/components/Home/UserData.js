import React, { useState, useEffect } from 'react'

const UserData = () => {

  const [ name, setName ] = useState('Welcome to Hooks!');

  useEffect( ()=> {
    document.title = name;
  }, [name]); // second arg is dependency
  // if the dep is changed by any means, useEffect() callback will be executed.
  // by default useEffect callback will be called one automatically
  // check the page before and after removing the dep

  return (
    <div>
      <h2>UserData | useEffect() Demo</h2>
      <p>{name}</p>

      <input type='text' value={name} onChange={ (e) => { setName(e.target.value) }}/>
    </div>
  )
}

export default UserData
