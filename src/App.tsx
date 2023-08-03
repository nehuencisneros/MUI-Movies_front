import React from 'react';
import './App.css';
import { Button, Container } from '@mui/material';
import { NavBar } from './common/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <Container sx={{mt: 10}} maxWidth="xl">
        <Button variant='outlined'>Login</Button>
      </Container>
    </div>
  );
}

export default App;
