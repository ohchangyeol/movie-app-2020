# Movie App 2020

## React JS Fundamentals Course (2020 Update!)

---

<br>

### 2020-10-26

<br>

- index.js 안에는 한개의 Component 밖에 불러올 수 없다.

  ```javascript
  ✔ ReactDOM.render(<App />, document.getElementById("root"));
  ```

  ```jsx
  ❗ ReactDOM.render(<App /><Potato />, document.getElementById("root"));
  ```

- React 필수 입력

  ```javascript
  import React from "react";
  //
  export default JsName;
  ```

  > export는 내보내기 위해 사용.

- props 의 이해

  ```javascript
  function Food({ fav }) {
    return <h3>I like {fav}</h3>;
  }

  function App() {
    return (
      <div>
        <h1>hello!</h1>
        <Food fav="kimchi" />
      </div>
    );
  }
  ```

  or

  ```jsx
  function Food(props) {
    return <h3>I like {props.fav}</h3>;
  }
  ```
