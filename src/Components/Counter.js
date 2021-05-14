import React, { Component } from 'react'
class Timer extends Component {
    state = { 
        counter: 0,
        text: "Click Here"
    }
    
    count() {
        setInterval(() => {
                this.setState( [this.state.counter++] );  
            },1000);
    }
    
 

    render() {
        return (
            <div className="App">
                <h2> It's {this.state.counter} </h2>
                <button> {this.state.text}</button>
                {this.count()}
            </div>
        );
    }
}
 
export default Timer;