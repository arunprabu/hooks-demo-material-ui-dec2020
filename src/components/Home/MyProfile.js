import React, { useState } from 'react';

// we will have state within fn comp
const MyProfile = () => {

  // useState will return an array with getter and setter 
  const [ personName, setPersonName ] = useState('Arun');

  const changeNameHandler = () => {
    setPersonName('John');
  }

  return (
    <div>
      <h2>MyProfile | useState() Demo</h2>
      <p>{ personName}</p>
      <button type="button" onClick={changeNameHandler}>Update Person Name</button>
    </div>
  )
}

export default MyProfile;
