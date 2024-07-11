import axios from "axios"
import React from 'react'
import { Link } from "react-router-dom";



const MovieList = ({movieData}) => {

  if (!movieData || !Array.isArray(movieData)) {
    movieData = [];
  }

  return(
    <div style={{width:"100%",}}>
         <div className="main-movies">

       {
        movieData.map((movieD, index)=>(
            <div key={index} className="movie-box">
         <Link to={`/movieitem/${index}`}>
         <div style={{height:"220px"}}>
                <img style={{width:"100%",width:"100%",height:"100%",objectFit:"fill"}} src={movieD.poster_path} alt="" />
            </div>
         </Link>
         <div>
            <h2 id="title" className="des">{movieD.title}</h2>
            <div className="ratingdate_Bx">
            <p>{movieD.release_date}</p> 
            <p className="des">Ratings<span style={{marginLeft:"6px"}}>{movieD.vote_average}</span></p> 
            </div>
            <p id="overview" className="des">{movieD.overview}</p>

              </div>
            </div>

        ))
       }

         </div>
    </div>

  )

}

export default MovieList;