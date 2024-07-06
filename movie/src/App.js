import './App.css';
import MovieItem from './component/MovieItem';
import Movies from './component/Movies';
import { Route, Routes} from 'react-router-dom'
import SearchBar from './component/SearchBar';



function App() {
  return (
    <div className="App">
      <Routes>
       <Route path='/' element= {<Movies/>}/>
       <Route path='MovieItem' element= {<MovieItem/>}/>
       <Route path='SearchBar' element= {<SearchBar/>}/>

      </Routes>
       
     
    </div>
  );
}

export default App;
