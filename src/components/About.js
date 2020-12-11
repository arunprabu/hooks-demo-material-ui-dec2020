import React, { useContext } from 'react';
import { Container } from '@material-ui/core';
import { PageContext } from '../PageContext';

const About = () => {
  // Step 3 of useContext() - get the data from context
  const context = useContext(PageContext);
  
  console.log(context);
  
  return (
    <Container>
      <h1>About Page!</h1>
      <hr/>
      <h2>Data Received from PageContext</h2>
      <p>Is Logged in? {context.isLoggedIn? 'Yes': 'No'}</p>
      <p>Last Login Date: {context.lastLogin}</p>
    </Container>
  )
}

export default About;
