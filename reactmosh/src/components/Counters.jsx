import React, { Component } from 'react'
import Counter from './Counter'

export class Counters extends Component {
  state = {
    counters: [
      {id: 1, value: 4},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0},

    ]
  }
  handleDelete = (targetID) => {
     const counters = this.state.counters.filter(c => c.id !== targetID);
     this.setState({ counters  });
  }
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    })
    this.setState({ counters });
  }
  handleIncrement = (counter) => {
   const counters = [...this.state.counters];
   const index = counters.indexOf(counter);
   counters[index] = {...counter};
    counters[index].value++;
    console.log(this.state.counters[index]);
    this.setState({ counters  });

  }
  render() {
    return (
      <div>
        <button 
        onClick={this.handleReset}
        className="btn btn-primary btn-lg m-2">RESET</button>
        {this.state.counters.map(counter =>  
        <Counter 
        key={counter.id} 
        counter = {counter}
        onDelete={this.handleDelete}
        onIncrement = {this.handleIncrement}
        >
        
        {/* <h4>Counter # {counter.id}</h4> */}
        </Counter>)}
      </div>
    )
  }
}

export default Counters
