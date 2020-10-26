import React from "react";
import propTypes from "prop-types";
// function Food(props) {
// console.log(props.fav);
function Food({ name, picture, rating }) {
  // console.log({ fav });
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
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2479D33658EC8AF317",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Doncasu",
    image: "https://t1.daumcdn.net/cfile/tistory/2451513D58DDE1EC02",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2019/03/10/168d255254103ff54861098af10adfae1.jpg",
    rating: 4.6,
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
