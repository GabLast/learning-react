import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Input from './components/Input';
import Container from './components/Container';
import LoginTest from './components/state/LoginTest';
import User from './components/state/User';
import UserWithContext from './components/context/User';
import { Counter } from './components/state/Counter';
import { ThemeContextProvider } from './components/context/ThemeContext';
import Box from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import DomRef from './components/ref/DomRef';
import MutableRef from './components/context/MutableRef';
import { Counter2 } from './components/class/Counter';
import Private from './components/auth/Private';
import Profile from './components/auth/Profile';

//command
//npx create-react-app ./typescript-test --template typescript

function App() {

  const person = {
    first: 'First',
    last: 'Last'
  }

  const personList = [
    {
      first: '1First',
      last: '1Last'
    },
    {
      first: '2First',
      last: '2Last'
    },
    {
      first: '3First',
      last: '3Last'
    }
  ]

  return (
    <div className="App">
      <Container styles={{ padding: '5rem', border: '5px solid black', }}>
        <Greet name='Name' count={123} isLogged={true} />
        <Person name={person} />
        <PersonList names={personList} />
        <Status status='loading' />
        <Status status='success' />
        <Status status='error' />
        <Heading>PlaceHolder</Heading>
        <Oscar>
          <Heading>Oscar is the father</Heading>
        </Oscar>
        <Greet name='Optional prop test' isLogged={true} optional='optional value' />
        <Button handleClick={() => {
          alert('event test')
        }} />
        <Button caption='My Caption' handleClick={() => { }} handleClick2={(event, id) => alert('event testing 2:' + event + '---------' + id)} />
        <Input value='' handleChange={(event) => console.log(event)} />
        <LoginTest />
        <User />
        <Counter />
        <br />
        <ThemeContextProvider>
          <Box />
        </ThemeContextProvider>
        <br />
        <UserContextProvider>
          <UserWithContext></UserWithContext>
        </UserContextProvider>
        <DomRef />
        <MutableRef />
        <br />
        <Counter2 message='My counter class'/>
        <br />
        <Private isLogged={true} component={Profile}></Private>
        <Private isLogged={false} component={Profile}></Private>
      </Container>

    </div>
  );
}

export default App;
