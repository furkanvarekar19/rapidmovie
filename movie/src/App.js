import './App.css';
import MovieItem from './component/MovieItem';
import Movies from './component/Movies';
import SearchBar from './component/SearchBar';
import { Route, Routes} from 'react-router-dom'
import { useState } from 'react';

function App() {

  const [datarecipe , setdatarecipe] = useState();
  const Addmovies  = (i) =>{
    setdatarecipe([...datarecipe , i])
  }
 
  return (
    <div className="App">
      <Routes>
       <Route path='/' element= {<Movies Addmovies ={Addmovies} />}/>
       <Route path='/MovieItem/:id' element= {<MovieItem i ={datarecipe} />}/>
       <Route path='/SearchBar' element= {<SearchBar/>}/>

      </Routes>
       
     
    </div>
  );
}

export default App;
