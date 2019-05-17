import React, { Component } from 'react'
import Counter from './Counter'

export class Counters extends Component {

  render() {
    const {onReset, counters, onDelete, onIncrement} = this.props
    return (
      <div>
        <button 
        style={{display: 'block'}}
        onClick={onReset}
        className="btn btn-primary btn-lg m-2">RESET</button>
        {counters.map(counter =>  
        <Counter 
        key={counter.id} 
        counter = {counter}
        onDelete={onDelete}
        onIncrement = {onIncrement}
        >
        
        {/* <h4>Counter # {counter.id}</h4> */}
        </Counter>)}
      </div>
    )
  }
}

export default Counters
