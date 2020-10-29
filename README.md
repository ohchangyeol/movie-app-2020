# Movie App 2020

## React JS Fundamentals Course

---

<br>

### JSX & Props

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

### array.map()

- 설명

  > map()메서드는 배열(array)내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 가진 새로운 배열을 만들어낸다. 맵 메서드로 맵핑해준다!

  ```javascript
  function Food({ name, picture }) {
    return (
      <div>
        <h2>I like {name}</h2>
        <img src={picture} />
      </div>
    );
  }
  const foodILike = [
    {
      id: 1,
      name: "Kimchi",
      image:
        "https://steemitimages.com/DQmUCKzQx9R5UTHwm91PwyUv236V1SJeJXFaN8C5sJW4GEM/2c77e779b5a5caa8d129a105a34e677a093927.jpg",
    },
  ];
  function App() {
    return (
      <div>
        {foodILike.map((dish) => (
          <Food key={dish.id} name={dish.name} picture={dish.image} />
        ))}
      </div>
    );
  }
  ```

  > array.map()은 array에 가지고 있는 개수만큼 불러온다.<br>
  > array를 dish 안에 넣어 오브젝트 형식으로 바꿔서 그안에 있는 value를 사용할수 있다.

  > > `<Food name={dish.name} picture={dish.image} />` food 의 props를 이용해 dish 안에 있는 value를 사용하여 응용한다.<br>`id`가 없을 때 다른 `name`, 다른 `image`지만 모든 element들이 같아보일수 있어 `id`를 넣어주어 다른 element 임을 지정 해준다.<br> `Key`는 prop에 적용되지 않는다.

### propTypes

- 설명

  > 확인하고 자 하는 `function`에 `.propTypes`를 이용해 `name`,`picture`,`rating`의 Type가 맞는지 안맞는지 console에서 확인하는 Method.

- npm을 설치

  ```
  npm i prop-types
  ```

- 오류 대처법

  ```
  npm i
  ```

- 예제

  ```javascript
  const foodILike = [
      {
          id: 1,
          name: "Kimchi",
          image:
          "https://steemitimages.com/DQmUCKzQx9R5UTHwm91PwyUv236V1SJeJXFaN8C5sJW4GEM/2c77e779b5a5caa8d129a105a34e677a093927.jpg",
  +       rating: 5,
      },
  ```

  ```javascript
  function Food({ name, picture, rating }) {
    return (
      <div>
        <h2>I like {name}</h2>
        <h4>{rating}/5.0</h4>
        <img src={picture} alt={name} />
      </div>
    );
  }
  ```

  ```jsx
  function renderFood(dish) {
      return (
          <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
  +       rating={dish.rating}
          />
      );
  }
  function App() {
      return <div>{foodILike.map(renderFood)}</div>;
  }

  ```

  ```jsx
  Food.propTypes = {
    name: propTypes.string.isRequired,
    picture: propTypes.string.isRequired,
    rating: propTypes.number,
  };
  ```

### 연습

- ```jsx
  import React from "react";
  import propTypes from "prop-types";

  function Food({ name, picture, rating }) {
    return (
      <div>
        <h2>I like {name}</h2>
        <h4>{rating}/5.0</h4>
        <img src={picture} alt={name} />
      </div>
    );
  }
  Food.propTypes = {
    name: propTypes.string.isRequired,
    picture: propTypes.string.isRequired,
    rating: propTypes.number,
  };

  const foodILike = [
    {
      id: 1,
      name: "Kimchi",
      image:
        "https://steemitimages.com/DQmUCKzQx9R5UTHwm91PwyUv236V1SJeJXFaN8C5sJW4GEM/2c77e779b5a5caa8d129a105a34e677a093927.jpg",
      // rating: 5,
    },
    {
      id: 2,
      name: "Samgyeopsal",
      image:
        "https://mp-seoul-image-production-s3.mangoplate.com/96659/3ssglwlvecxz9r.jpg",
      rating: 4.9,
    },
  ];

  function renderFood(dish) {
    return (
      <Food
        key={dish.id}
        name={dish.name}
        picture={dish.image}
        rating={dish.rating}
      />
    );
  }
  function App() {
    return <div>{foodILike.map(renderFood)}</div>;
  }

  export default App;
  ```

<br>

### State

- 개요
  <br>
  `state`을 사용하려면 React component class 를 정의를 해야합니다. `react.component`를 상속받아야 한다.
  ```jsx
  class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }
  ```
  > `React.Component` 은 `return` 을 가지고있지않고 `render()` 라는 메소드를 가지고 있다.<br>
  > function component 는 function 이고 어떤것을 return 하고 screen에 표시된다. class component 는 class여야 하지만 React component로 부터 확장되고 csreen에 표시된다.<br>
  > React 는 자동적으로 모든 class component의 render 메소드를 실행하고자 한다.

<br>

- State 변형되는 데이터

  ```jsx
  class App extends React.Component{
    state = {
      count: 0,
    };
    render(){
      return(
        console.log(this.state.count);
      )
    }
  }
  ```

  > 출력값 = 0

- State 값 변형

  ```jsx
  class App extends React.Component {
    state = {
      count: 0,
    };
    add = () => {
      this.setState({ count: this.state.count + 1 });
    };
    render() {
      return (
        <div>
          <h1>The number is : {this.state.count}</h1>
          <button onClick={this.add}>Add</button>
        </div>
      );
    }
  }
  ```

  > `state`의 값을 `this.state.count += 1` 하게되면 실행이 되지않는다. <br>그러나 `setState()`을 사용하면 업데이트? 의 기능을 쓸수 있다.<br>
  > 하지만`setState()`을 할 때, react 에서 외부의 상태에 의존하는것은 좋지 않은 방법이다.

  ```jsx
  state = {
    count: 0,
  };
  add = () => {
    // 값을 업데이트할 때 `this.state` 대신 `state` 값을 읽어 온다.
    this.setState((current) => ({ count: current.count + 1 }));
  };
  ```

### React component Method

- Mount

  아래 메서드들은 컴포넌트의 인스턴스가 생성되어 DOM 상에 삽입될 때에 순서대로 호출됩니다.

  - **constructor()**
  - static getDerivedStateFromProps()
  - **render()**
  - **componentDidMount()**

- Update

  props 또는 state가 변경되면 갱신이 발생. 아래 메서드들은 render 될때 순서대로 실행.

  - static getDerivedStateFromProps()
  - shouldComponentUpdate()
  - **render()**
  - getSnapshotBeforeUpdate()
  - **componentDidUpdate()**
    > `componentDidUpdate()` 는 업데이트가 끝나고 render되고 나서 실행.

- Unmount

  컴포넌트가 마운트 해제되어 제거되기 직전에 호출

  - **componentWillUnmount()**

<br>

### axios

- 설명

  > JavaScript를 사용한 비동기 통신, 클라이언트와 서버간에 XML 데이터를 주고받는 기술이다.
  > axios 는 fetch 위에 있는 작은 layer
  > axios 는 XML데이터를 가져오는게 느리기 때문에 약간의 시간이 있어야 한다.

- 설치
  ```
  npm i axios
  ```

### async()와 await

- 설명

  > 데이터를 기다리기 위해 `async()` 라는 비동기 함수를 쓰고 어떤것을 기다리는 지 묻는 `await` 를 쓴다.

  ```jsx
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  };
  ```

### 간단하게 쓰기 위한 ES6 문법

- 구조 분해 문법

  ```jsx
  const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  console.log(movies.data.data.movies);
  ```

  ```jsx
  const {
    data: {
      data: { movies },
    },
  } = await axios.get(
    "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
  );
  console.log(movies);
  // movies.data.data.movies 와 {data:{data:{movies}}}의 차이
  ```

  > `axios.get()`를 전체적인 객체로 잡고 그안으로 들어가서 찾는 것과,
  > `axios.get()`안에 있는 `data`안에 `data`안에 `movies`를 객체로 잡는것의 차이

  ```jsx
  state = {
    isLoading: true,
    movies: [],
  };

  const isLoading = this.state.isLoading;
  const movies = this.state.movies;
  console.log(isLoading);
  console.log(movies);
  ```

  ```jsx
  state = {
    isLoading: true,
    movies: [],
  };

  const { isLoading, movies } = this.state;
  console.log(isLoading);
  console.log(movies);
  ```

- if문의 축약형, 삼항 조건 연산자

  ```jsx
  condition ? expr1 : expr2;
  ```

  > condition 은 조건을 나타내는 표현식이 들어가는 자리입니다. (조건문의 결과는 true, false 둘 중 하나가 나오는 표현식)<br>
  > expr1 은 조건문이 참일때 반환되는 표현식이고, expr2 는 조건문이 거짓일 때 반환되는 표현식

  ```jsx
  const { isLoading, movies } = this.state;
  return <div>{isLoading ? "Loading..." : "i'm ready"}</div>;
  ```

  ```jsx
  if ((isLoading = ture)) {
    return <div>Loading...</div>;
  } else {
    return <div>i'm ready</div>;
  }
  ```
