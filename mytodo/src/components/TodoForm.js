import React, { Component } from 'react'

export default class TodoForm extends Component {
      constructor(props){
          super(props)
          this.state={
              todo:""
          }
      }
      changeHandler=event=>{
         this.setState({[event.target.name]:event.target.value})

      }
      submitHandler=event=>{
          event.preventDefault()
          this.props.addTodo(this.state.todo)
          this.setState({todo:""})
      }

    render() {
        return (
            <>
                <form onSubmit={this.submitHandler}>
                    <input type ="text" onChange={this.changeHandler} name="todo" value={this.state.todo}/>
                    <button> ADD HERE </button>
                    
                  
                </form>
                <button onClick ={this.props.clearTask}> Completed </button>
                
                
                
            </>
        )
    }
}
