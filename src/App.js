import { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeader from './components/MovieListHeader';
import SearchBox from './components/SearchBox';

function App() {
  const [movies, setMovies] = useState([
    {
      "Title": "Alien",
      "Year": "1979",
      "imdbID": "tt0078748",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMmQ2MmU3NzktZjAxOC00ZDZhLTk4YzEtMDMyMzcxY2IwMDAyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    }
  ]);

  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValueParams) => {
    const url = `https://www.omdbapi.com/?s=${searchValueParams}&apikey=263d22d8`

    const response = await fetch(url);
    const responseJson = await response.json();

    // console.log(responseJson);
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className='container-fluid movie-line'>
      <div className='row d-flex align-items-center'>
        <MovieListHeader heading="Movie-Picker" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      <div className='row'>
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
