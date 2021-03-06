import React, { Component } from "react";


class Counter extends Component {
  
//   constructor(){
//       super();
//       this.handleIncrement = this.handleIncrement.bind(this);
//   }

  render() {

    
    return (
      <div>
        
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button 
        onClick={()=>this.props.onIncrement(this.props.counter)} 
        className="btn btn-secondary btn-sm m-2"
        >Increment</button>
        <button 
        onClick={()=>this.props.onDelete(this.props.counter.id)} 
        className="btn btn-danger btn-sm m-2">Delete</button>
        {/* <button onClick={this.handleDecrement} className="btn btn-secondary btn-sm m-2">-</button> */}
      </div>
    );
  }
  

  
//   handleDecrement=() => {
//     this.setState( this.state.count === 0 ? {count: this.state.count -1} );
//   }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
