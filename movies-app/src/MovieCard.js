import React from "react";
import "./MovieCard.css"

const MovieCard =(props) => {
    const API_IMG= "https://image.tmdb.org/t/p/w500/"
    return (
        <div className="MovieCard">
            <div className="poster">
                <img src={API_IMG + props.poster_path}></img>
            </div>
            <div className="info">
                <p className="title">{props.title}</p>
                <p className="vote">{props.vote_average}</p>
            </div>
            <div className="overview">
                <h3 className="title_overview">Overview :</h3>
                <h5 className="overview_info">{props.overview}</h5>
            </div>
        </div>
    )
}
export default MovieCard