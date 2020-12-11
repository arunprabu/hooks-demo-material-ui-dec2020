import React from 'react';
import { Container } from '@material-ui/core';
import MyProfile from './MyProfile';
import UserData from './UserData';
import Todo from './Todo';

const Home = () => {

  return (
    <Container>
      <h1>Welcome to React Hooks Demo!</h1>

      <div>
        <MyProfile />
        <hr/>
        <UserData />
        <hr/>
        <Todo />
      </div>

    </Container>
  )
}

export default Home;
