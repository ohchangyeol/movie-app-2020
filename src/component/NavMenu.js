import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"

function NavMenu({id, year, title, summary, poster, genres,background,rating,torrents720p,torrents1080p}) {
    return(
        <Link to ={{
            pathname:`movie/${id}`,
            state:{
                id,
                year,
                title,
                summary,
                poster,
                genres,
                background,
                rating,
                torrents720p,
                torrents1080p,
            }
        }}>{title}</Link>
    )
    
}

export default NavMenu;
