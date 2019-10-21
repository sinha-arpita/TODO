import React from 'react';
//import logo from './logo.svg';
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"

import './App.css';


class App extends React.Component{
     constructor(){
       super()
       this.state={
         todos:[
                {
                  task:"study",
                  id:1234,
                  completed:false
              }
         ]

       }
     }

     addTodo =(newTask)=>{
         const newTodo= {
               task:newTask,
               id:Date.now(),
               completed:false
         }
         this.setState({todos:[...this.state.todos,newTodo]})

     }
     toggleTask =(id)=>{
       console.log("Toggling")
       this.setState({
         todos: this.state.todos.map(todo =>{
              if(todo.id===id){
                 return {
                    ...todo,
                    completed:!todo.completed
                 }
              }else{
                return todo
              }
       })})
       
       
     }
    

     clearTask =()=>{
       console.log("clearing")
       this.setState({todos:this.state.todos.filter(todo =>
                 !todo.completed ) })
     }
     
  render(){
    return(
      <>
      <TodoForm  addTodo ={this.addTodo } clearTask={this.clearTask}/>
      <TodoList addTodo ={this.addTodo }  todos={this.state.todos} toggleTask={this.toggleTask}/>
      </>
    )
  }
}
export default App;
