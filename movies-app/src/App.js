import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"
import Card from "./Card"
import MovieCard from "./MovieCard";
import { NavLink } from "react-router-dom";

function App() {
  const [list, setList] = useState([])
  const [movies, setMovies] = useState([])

  const API_URL = `https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1&api_key=0af75f55594c05394b95bfc972694ddb&append_to_response=credits`

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setMovies(data.results))
  }, [])
  console.log(movies)
  console.log(process.env.REACT_API_KEY)
  function GetResultSearch(name) {
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/search/movie?query=${name}&language=fr-FR&api_key=0af75f55594c05394b95bfc972694ddb`,
      Authorization: 'Bearer 0af75f55594c05394b95bfc972694ddb',
      headers: {
      }
    };
    axios
      .request(options)
      .then(function (response) {
        setList(response.data.results)

      })
  }
  const [showpopular, setShowPopular] = useState(true)

  function HandleInputChange(e) {
    GetResultSearch(e.target.value)
    if (
      e.target.value.length == 0

    ) {

      setShowPopular(true)
    }
    else {
      setShowPopular(false)
    }
  }
  const RenderList = list.map((item, index) =>
    <Card info={item} />)
  return (
    <div className="App">
      <div className="search_nav">
        <div className="title">
          <h1>Movie</h1>
        </div>
        <input
          onChange={HandleInputChange} /><button>Search</button>
      </div>
        <div className="test">{RenderList}</div>
      {showpopular &&
        <div className="movies">
          {movies.map((movie) =>
            <MovieCard {...movie} />
          )}
        </div>
      }
    </div>
  );
}

export default App;