import React from "react";
import {HashRouter, Route} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import About from "./routes/About";
import Navigation from "./component/Navigation"
import axios from "axios";
// axios, fetch 는 JavaScript를 사용한 비동기 통신, 클라이언트와 서버간에 XML 데이터를 주고받는 기술
// axios 는 fetch 위에 있는 작은 layer 
// npm i axios
// axios 는 데이터를 가져오는게 느리기 때문에 약간의 시간이 있어야 한다.
//  그것을 기다리기 위해 async() 라는 비동기 함수를 쓰고 어떤것을 기다리는 지 묻는 await 를 쓴다.
import "./App.css";


class App extends React.Component{
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
  render(){
    return (
      <HashRouter>
        <Navigation states={this.state.movies}/>
        <Route path = '/' exact={true} render={()=> <Home states={this.state}/>} />
        <Route path = '/about' component={About}/>
        <Route path = '/movie/:id' component={Detail}/>
      </HashRouter>
    )
  }
}
// function App(){
// }

export default App;