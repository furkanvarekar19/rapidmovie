
import './App.css';
import MovieList from "./components/MovieList"
import {Routes,Route} from "react-router-dom"
import MovieItem from "./components/MovieItem"
// import MovieVideo from "./components/MovieVideo"
import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [movieData, setMovieData] = useState([]);

  console.log(movieData, "movieData");
  async function MoviApiCalling() {

    // const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://movies-api14.p.rapidapi.com/search',  
  params: {
    query: 'breaking bad'
  },  
  headers: {
    'x-rapidapi-key':'60c19c5270msh31e46635766ef45p19c71cjsn47ac3532a6fe',
    'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	setMovieData(response.data.contents);
} catch (error) {
	console.error(error);
}
  }
useEffect(()=>{
  MoviApiCalling();
},[])

  return (
    <div className="App">
      <Routes >
       <Route path="/" element={<MovieList movieData={movieData}/>}/> 
       <Route path="/movieitem/:id" element={<MovieItem movieData={movieData}/>}/> 
       {/* <Route path='/movievideo/:id'element={<MovieVideo movieData={movieData}/>}/> */}

      </Routes>
    </div>
  );
}

export default App;
