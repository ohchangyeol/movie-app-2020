import React from "react";
import axios from "axios";
// axios, fetch 는 JavaScript를 사용한 비동기 통신, 클라이언트와 서버간에 XML 데이터를 주고받는 기술
// axios 는 fetch 위에 있는 작은 layer 
// npm i axios
// axios 는 데이터를 가져오는게 느리기 때문에 약간의 시간이 있어야 한다.
//  그것을 기다리기 위해 async() 라는 비동기 함수를 쓰고 어떤것을 기다리는 지 묻는 await 를 쓴다.
import Movie from "../component/Movie"
import "./Home.css"
class Home extends React.Component{
  state = {
    isLoading : true,
    movies :[]
  }

  getMovies = async() => {
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // console.log(movies.data.data.movies);
    //  이것을 ES6 로 바꿔쓰면 더 간단한 코드로 바꿀 수 있다. 
    const {data : {data : {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    // console.log(movies);
    this.setState({movies, isLoading : false})
    
  }

  componentDidMount () {
    this.getMovies();
  }
  render (){
    const { isLoading, movies } = this.state;
    // ES6 의 구조 분해 문법
    return (
    <section className ="container">
      {isLoading ? 
        <div className ="loader">
          <span className ="loader_text">Loading...</span>
        </div> : 
        <div className ='movies'>
          {movies.map(movie=>(
            <Movie 
              key={movie.id} 
              id={movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))}
        </div>  
      }
    </section>)
    
    // 원리
    // 처음 렌더가 되면 isLoading 가 ture면 div를 생성해 Loading... 라는 문구가 나오게 되고 didMount가 실행이 되면 axiosget()url 안에있는 data>data>movies 를 넣게 되고 setstate로 state 값을 변경한다.
    // 그리고 setstate를 통해 바뀐 부분을 Update해주고 if 문이 다시 실행됨으로 외부스크립트를 불러온다. 
    // <movie />에 props를 넣어 movie.js 안에 function에 props 를 넣는다.그리고 return하게 되어 화면에 출력합니다. propTypes를 통해 id가 숫자인지, year가 숫자인지, title 이 문자열인지 체크하여 오류를 콘솔창에 나타낸다. 
  }
}

export default Home;
 