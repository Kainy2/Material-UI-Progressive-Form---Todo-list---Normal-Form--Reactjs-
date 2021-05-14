import React, { Component } from "react";
import ToDoList from "./ToDoList";

class ToDoApp extends Component {
    state = {
        todo: [
            {
                id: 1,
                title: "Play 'Love in the Dark'",
                artiste: "Jessie Reyez",
            },
            {
                id: 2,
                title: "Play 'The heart wants what it wants'",
                artiste: "Selena Gomez",
            },
            {
                id: 3,
                title: "Play 'SOS'",
                artiste: "Shakka",
            },
        ],
    };
    render() {

        return (
            <div style={body}>
                <div style={header}>
                    <h1> A React To-do List App</h1>
                </div>

                <div style={body}>
                    <ToDoList todo = {this.state.todo} />
                </div>
            </div>
        );
    }
}
const body = {
    fontFamily: "helvetica",
    borderRadius: "50px",
    fontSize: "17px",

};
const header = {
    color: "white",
    backgroundColor: "black",
    textAlign: "center",
    margin: "5px",
    padding: "1px",
};

export default ToDoApp;
