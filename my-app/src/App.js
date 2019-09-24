import React, {Component} from 'react';
import Todos from './Components/Todos';
import './App.css';

class App extends Component{
   state = {
     todos: [{
       id: 1,
       title: 'Take out trash',
       completed: false
     }, 
     {
       id: 2,
       title: 'Take out food',
       completed: true
     }, 
     {
       id: 3,
       title: 'Take out dog',
       completed: false
     }]
   }
  render() {
    console.log(this.state.todos)
  return (
    <div className="App">
    <Todos todos={this.state.todos}/>
    </div>
  );  
  }
  
}

export default App;
