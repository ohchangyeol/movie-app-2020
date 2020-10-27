import React from "react";
// import propTypes from "prop-types";

class App extends React.Component{ // function App 이 아닌 class Component로 쓰기 위한 필수 요소.
  // React.Component 은 return 을 가지고있지않고 render 라는 메소드를 가지고 있다. 
  // function component 는 function 이고 어떤것을 return 하고 screen에 표시된다. class component 는 class여야 하지만 
  // React component로 부터 확장되고 csreen에 표시된다.
  // React 는 자동적으로 모든 class component의 render 메소드를 실행하고자 한다.
  // 왜 굳이 function component 가 아닌 class component 여야만 할까 ? 
  // 그이유는 class component 가 가지고 있는 state 때문이다.
  //state 는 변하는 데이터를 나타낸다. type = object
  
  state = {
    count : 0 
  }
  //render 보다 먼저 실행. super ()를 써줘야 함.
  // constructor(props){
  //   super(props);
  // }

  add = () => {
    // state 를 set 할 때, react 에서 외부의 상태에 의존하는것은 좋지 않은 방법이다. 
    // this.setState({count :this.state.count + 1 })
    
    // 값을 업데이트할 때 `this.state` 대신 `state` 값을 읽어 온다.
    this.setState(current => ({count : current.count + 1 }))

  }
  minus= () => {
    this.setState(current => ({count : current.count - 1 }))
  };
  componentDidMount(){
    console.log('마운팅');
    // render가 실행되고 다음에 실행
  }
  componentDidUpdate(){
    console.log("업데이트");
    //업데이트가 되고 나서 render가 끝나면 실행
  }
  componentWillUnmount(){
    // component 에서 떠날때 실행.
  }
  render (){
    console.log("랜더링");
  // return <h1>Im a class {state}</h1>
  // html 이 아닌 script를 쓸땐 { } 를 썻지만 React Component 에서 script 를 쓸땐 `this` 를 써야한다. 

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
