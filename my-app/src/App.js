import React, {Component} from 'react';
import Todos from './Components/Todos';
import Header from './Components/Layout/Header';
import  AddTodo from './Components/AddTodo';
import uuid from 'uuid'
import './App.css';

class App extends Component{
   state = {
     todos: [{
       id: uuid.v4(),
       title: 'Take out trash',
       completed: false
     }, 
     {
       id: uuid.v4(),
       title: 'Take out food',
       completed: true
     }, 
     {
       id: uuid.v4(),
       title: 'Take out dog',
       completed: false
     }]
   }

  //  Toggle Complete
    markComplete = (id) => {
      this.setState({ todos:this.state.todos.map(todo => {
        if(todo.id === id) {
        todo.completed = !todo.completed;
        }
        return todo;
      }) 
    })
  }

  // Delete todo
  delTodo = (id)=> {
    this.setState({todos:[...this.state.todos.filter(todo=>todo.id !== id)]})
    // filter will loop through and then return another array afterwards
    // return ids that doesn't match the ids that currently passed in
    // spread operator lets you copy what's already in the array [...]
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({todos:[...this.state.todos, newTodo]});
  }
  render() {
    console.log(this.state.todos)
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>

      </div>
   </div>
  );  
  }
  
}

export default App;
