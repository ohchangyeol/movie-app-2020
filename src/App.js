import React from "react";
// import propTypes from "prop-types";

class App extends React.Component{
  state = {
    count : 0 
  }
  
  render (){
    console.log("랜더링"); 
    return (
      <div>
        <h1>The number is :  {this.state.count}</h1>
        {/* this.add() 뒤에 () 는 즉시 실행을 나타낸다 */}
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;
