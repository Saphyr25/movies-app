import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Home.css"
import Card from "../components/Card"

function Home() {
 const [list, setList] = useState([])

  function GetResultSearch(name) {
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/search/movie?query=${name}&language=fr-FR&api_key=0af75f55594c05394b95bfc972694ddb`,
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWY3NWY1NTU5NGMwNTM5NGI5NWJmYzk3MjY5NGRkYiIsInN1YiI6IjY1MTlhMDQ5OTNiZDY5MDBlMTJlNTYxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lVPvlsix8iXgZ2YOFQxwnNQdBCDPf8HVC4J10_RHLoQ'
      }
    };
    axios
      .request(options)
      .then(function (response) {
        setList(response.data.results)
        console.log(response);
        console.log(list);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function HandleInputChange(e) {
    GetResultSearch(e.target.value)
  }
  const RenderList = list.map((item, index) =>
    <Card info={item}/>)
  return (
    <div className="Home">
      <input
        onChange={HandleInputChange} />
      {RenderList
      }
    </div>
  );
}

export default Home;