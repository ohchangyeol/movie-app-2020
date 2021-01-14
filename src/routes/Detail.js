import React from "react";
import "./Detail.css"

class Detail extends React.Component {
  // winwidth = window.innerWidth;
  state = {
    winwidth : window.innerWidth
  }
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
    window.addEventListener("resize",()=>{
      this.setState({winwidth : window.innerWidth})
      console.log(this.state.winwidth)
    })
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
          <div className="detail_container">
            <img className="detail_background" src={this.state.winwidth > 1090 ? location.state.background : location.state.poster}/>
            <div className="detail_gird">
              <div className="detail_title">
                <h1>{location.state.title}</h1>
              </div>
              <div className="bottom_grid">
                <div className="detail_poster">
                  <img src={location.state.poster}/>
                </div>
                <div className="detail_sum">
                  <div className="detail_sum">
                    <h3>Summary</h3>
                    <span>{location.state.summary}</span>
                  </div>
                </div>
                <div className="detail_rating_down">
                  <div className="detail_rating_box">
                    <div className="detail_rating">
                    <span>{location.state.rating}</span>
                    </div>
                  </div>
                  <div className="detail_down">
                    <h3>Download</h3>
                    <ul>
                      <li><a href={location.state.torrents720p}>720p</a></li>
                      <li><a href={location.state.torrents1080p}>1080p</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    } else {
      return null;
    }
  }
}
export default Detail;
