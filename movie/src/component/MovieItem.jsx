import React from "react";
import { useParams } from "react-router-dom";

function MovieItem({ data }) {
  console.log(data);
  const {id} = useParams();
  const datarecipe = data[id];
  console.log(datarecipe);

  return (
    <div>
      <div>
        <div>
          <img src={datarecipe.poster_path} alt="img" />
          <p>{datarecipe.title}</p>
          <p> {datarecipe.release_date} </p>
        <p> Rating:{datarecipe.vote_average} </p>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;
