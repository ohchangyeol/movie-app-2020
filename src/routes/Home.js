import React from "react";

import Movie from "../component/Movie"
import "./Home.css"
function Home(states){
    const { states : {isLoading, movies} } = states;
    return (
    <section className ="container">
      <div className="movie_list">Movie List</div>
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
              background={movie.background_image}
              rating={movie.rating}
              torrents720p={movie.torrents[0].url}
              torrents1080p={movie.torrents[1].url}

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

export default Home;
 