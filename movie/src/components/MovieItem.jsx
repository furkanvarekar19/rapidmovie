import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const MovieItem = ({movieData,index}) => {
    const {id}=useParams();
    const movieDatas=movieData[id];

    console.log(movieDatas,"movieDatas")

  return (
    <div>
        <div>
            {
            <div className='mainimg' >
             <div className='textImg'>
            <div className='moviesTtl'>
                <h4>{movieDatas.contentType}</h4>
                <h2>Movies Name : {movieDatas.original_title}</h2>
            </div>
            <div className='poster_path'>
              <img src={movieDatas.poster_path} alt="poster_path" />
            </div>
             <p className='overvw'>{movieDatas.overview}</p>
        
              <div className='mainimg2'>
                <p>Release date <span>{movieDatas.release_date}</span></p>
                <p>Ratings <span>{movieDatas.vote_average}</span></p>
                <p>voting : <span>{movieDatas.vote_count}</span></p>
            </div>
              <div className='CDT'>
                <h3>{movieDatas.genres[0]}</h3>
                <h3>{movieDatas.genres[1]}</h3>
                <h3>{movieDatas.genres[2]}</h3>
                </div>
                <Link to={`/movievideo/${index}`}>
                {/* <div>play</div> */}
                </Link>
               
              </div>
            </div>  

            }
        </div>
    </div>
  )
}

export default MovieItem;