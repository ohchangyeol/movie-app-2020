import React from "react";

// function Food(props) {
// console.log(props.fav);
function Food({ fav }) {
  // console.log({ fav });
  return <h3>I like {fav}</h3>;
  // props 안에 fav 를 쓰고싶을때 props.fav 를 쓸수 있지만, {fav} 를 써서 value를 쓸수 있다.
}

function App() {
  return (
    <div>
      <h1>hello!</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="chukumi" />
    </div>
  );
}

export default App;
