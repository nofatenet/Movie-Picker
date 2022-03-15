import { useEffect, useState } from 'react';
//import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import './tooltip.css';
import MovieList from './components/MovieList';
import MovieListHeader from './components/MovieListHeader';
import SearchBox from './components/SearchBox';
import AddToList from './components/AddToList';
import RemoveFromList from './components/RemoveFromList';

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

  const [added, setAdded] = useState([]);

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

    // setTimeout(
    //   getMovieRequest(searchValue),
    //   5000);

    getMovieRequest(searchValue);
  }, [searchValue]);

  const addMovieToList = (movie) => {

    if (!added.includes(movie)) {

      //Checking if Movie is already on the List

      //console.log("added: ", added);
      //console.log("movie: ", movie);

      const newWatchList = [...added, movie];
      setAdded(newWatchList);
    }
  }

  const removeFromList = (movie) => {
    const newWatchList = added.filter((added) => added.imdbID !== movie.imdbID);
    setAdded(newWatchList);
  }

  return (
    <div className='container-fluid movie-line'>
      <div className=''>
        <img src="./images/mp-title.png" alt='movie-picker-title'></img>
        <MovieListHeader heading="Movie-Picker" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      <div className=''>
        <MovieList
          movies={movies}
          addToListComponent={AddToList}
          handleAddsClick={addMovieToList} />
      </div>
      <MovieListHeader heading="Watch-List" />
      <MovieList
        movies={added}
        addToListComponent={RemoveFromList}
        handleAddsClick={removeFromList} />
    </div>
  );
}

export default App;
