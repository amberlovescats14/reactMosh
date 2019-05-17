import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Counters from './components/Counters.jsx'



export class App extends Component {
  state = {
    counters: [
      {id: 1, value: 4},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0},

    ]
  }
  constructor() {
    super();
    console.log('App-Constructor');
    // this.state = this.props.something;
  }
  componentDidMount() {
    //AJAX call
    // this.setState({ :  });
    console.log("DID MOUNT")
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
      <React.Fragment>
        <Navbar
        totalCounters={this.state.counters.filter(c=> c.value > 0).length}
        />
        <main className="container-fluid">
        <Counters
        counters={this.state.counters}
        onReset={this.handleReset}
        onIncrement = {this.handleIncrement}
        onDelete={this.handleDelete}
        />
        </main>
      </React.Fragment>
    )
  }
}

export default App
