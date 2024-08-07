import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

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
      <Greet name='Name' count={123} isLogged={true} />
      <Person name={person}/>
      <PersonList names={personList}/>
    </div>
  );
}

export default App;
