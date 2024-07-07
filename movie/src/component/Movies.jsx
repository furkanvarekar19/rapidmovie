import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Movies() {
const [data , setData]= useState([]);
console.log(data);
const navigate = useNavigate();


  async function movie() {
    // const axios = require('axios');

    const options = {
      method: 'GET',
      // url: 'https://movies-api14.p.rapidapi.com/search',
      params: {
        query: 'breaking bad'
      },
      headers: {
        'x-rapidapi-key': '60c19c5270msh31e46635766ef45p19c71cjsn47ac3532a6fe',
        'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);
       setData(response.data.contents);
    } catch (error) {
        console.error(error);
    }
    
  }

useEffect(()=>{
    movie()
},[])


  return (
    <div className='movies_main'>
        <h1>Movies</h1>
        <div className='movies'>
            {
                data.map((i,index)=>(
                    <div className='movies_box' key={index} onClick={()=>navigate(`/MovieItem/${index}`)}>
                   
                        <img src={i.poster_path} alt="img" />
                        <p>{i.title}</p>
                        {/* <p> {i.release_date} </p>
                        <p> Rating:{i.vote_average} </p> */}   
                    </div>
                ))
            }
        </div>
      
    </div>
  )
}

export default Movies;