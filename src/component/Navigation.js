import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"
import NavMenu from "./NavMenu";

function Navigation(movies) {
    return(
        <div className ="nav">
            <Link className="home" to ="/"><span>M</span></Link>
            <div className="nav_movies_list">
                {movies.states.map(movie=>(
                    <NavMenu 
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
        </div>
    )
    
}

export default Navigation;
