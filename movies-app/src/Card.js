import React, { useEffect, useState } from "react";
// import "./MovieCard.css"



function Card(props){
    const API_IMG= "https://image.tmdb.org/t/p/w500/"

    const [title, setTitle] = useState("")
    return(
        <div className="MovieCard">
            <div className="poster">
                <img src={API_IMG + props.info.poster_path}></img>
            </div>
            <div className="info">
                <p className="title">{props.info.title}</p>
                <p className="vote">{props.info.vote_average}</p>
            </div>
            <div className="overview">
                <h3 className="title_overview">Overview :</h3>
                <h5 className="overview_info">{props.info.overview}</h5>
            </div>
        </div>
    )
}
export default Card;