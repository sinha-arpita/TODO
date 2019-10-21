import React, { Component } from 'react'
import Todo from "./Todo"

export default class TodoList extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                {
                   this.props.todos.map(todo=>{
                         return <Todo  key={todo.id} todo={todo} toggleTask={this.props.toggleTask}/>

                   })

                   }
                }
                
            </div>
        )
    }
}
