import React, { useContext } from 'react';
import { Container } from '@material-ui/core';
import MyProfile from './MyProfile';
import UserData from './UserData';
import Todo from './Todo';
import { PageContext } from '../../PageContext';

const Home = () => {

  // Step 3 of useContext() - get the data from context
  const context = useContext(PageContext);
  
  console.log(context);

  return (
    <Container>
      <h1>Welcome to React Hooks Demo!</h1>

      <div>
        <MyProfile/>
        <hr/>
        <UserData />
        <hr/>
        <Todo />
        <hr/>
        <h2>Data Received from PageContext | useContext() Demo</h2>
        <p>Is Logged in? {context.isLoggedIn? 'Yes': 'No'}</p>
        <p>Last Login Date: {context.lastLogin}</p>
      </div>

    </Container>
  )
}

export default Home;
