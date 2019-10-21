import React, { Component } from 'react'
import './todo.css';

export default class Todo extends Component {
    constructor(){
        super()
    }

    render() {
        return (
            <div className={this.props.todo.completed? "completed" : ""}
              
               onClick={()=>{this.props.toggleTask(this.props.todo.id)}}>
                    <p> {this.props.todo.task}</p> 
            </div>
        )
    }
}
