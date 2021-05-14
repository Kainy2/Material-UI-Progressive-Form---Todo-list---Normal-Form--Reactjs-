import React, { Component } from 'react'

class ToDoList extends Component {


    render() {
        return (
            // console.log(this.state.todo.filter((titles) => this.state.todo.title));
            
            <div style={todoItems}>

               
            
            </div>

        )
    }
}
const todoItems = {
    backgroundColor: "gray",
    padding: "5px 20px",
    borderRadius: "5px",
    margin: "10px 5px",
    fontWeight: "bold",
    fontSize: "19px"
}

export default ToDoList;
