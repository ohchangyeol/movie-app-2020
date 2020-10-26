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

- array.map()의 이해

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

- propTypes

  ```
  npm i prop-types
  ```

  > npm을 설치

  ```
  npm i
  ```

  > 오류 대처법

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

  > 확인하고 자 하는 `function`에 `.propTypes`를 이용해 `name`,`picture`,`rating`의 Type가 맞는지 안맞는지 console에서 확인하는 Method.
