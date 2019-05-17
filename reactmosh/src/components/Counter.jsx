import React, { Component } from 'react'

export class Counter extends Component {
  state = {
    // value: this.props.counter.value,
    tags: ['tag1', 'tag2', 'tag3'],
    imgUrl: 'https://picsum.photos/200'
  }
  styles = {
    fontSize: '50px',
    fontWeight: 'bold'

  }
  renderTags = () => {
  if(this.state.tags.length === 0) return <p>There are no tags</p>;
  return       <ul>
  {this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}
              </ul>
  }
  
  // handleIncrement = (e) => {
  //   e.preventDefault();
  //   this.setState({ value: this.state.value +1  });
  // }

  render() {
    return (
    <div>
      <img src={this.state.imgUrl} alt=""/> 
      {/* {this.props.children} */}

      <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
      <button  className="btn btn-danger btn-sm m-2"
      onClick={() => this.props.onDelete(this.props.counter.id)}>DELETE</button>
      <span 
      className={this.getBadgeClasses()}>
      {this.formatCount()}
      </span>
      {this.state.tags.length === 0 && 'Please create a new tag'}
      {this.renderTags()}

      </div>

    );
  }
  formatCount = () => {
    const {value} = this.props.counter
    let x = <h2>Amber</h2>
    return value === 0 ? 'Zero': value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.props.counter.value === 0) ? "warning" : "primary";
    return classes;
  }
}

export default Counter

 
// state = {
//   count: 0,
//   tags: ['tag1', 'tag2', 'tag3'],
//   // imgUrl: 'https://picsum.photos/200'
// }
// styles = {
//   fontSize: '30px',
//   fontWeight: 'bold'

// }

// render() {
//   return (
//   <React.Fragment>
//     </React.Fragment>
//   );
// }