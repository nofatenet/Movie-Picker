import { useEffect, useState } from 'react';
//import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import './tooltip.css';
import mptitle from './images/mptitle.png';
import MovieList from './components/MovieList';
import MovieListHeader from './components/MovieListHeader';
import SearchBox from './components/SearchBox';
import AddToList from './components/AddToList';
import RemoveFromList from './components/RemoveFromList';
import FileSaver from './FileSaver';

function App() {
  const [movies, setMovies] = useState([
    // {
    //   "Title": "Alien",
    //   "Year": "1979",
    //   "imdbID": "tt0078748",
    //   "Type": "movie",
    //   "Poster": "https://m.media-amazon.com/images/M/MV5BMmQ2MmU3NzktZjAxOC00ZDZhLTk4YzEtMDMyMzcxY2IwMDAyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    // }
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
      console.log("Aufruf API");
    }
  };

  useEffect(() => {

    let timeOutId = setTimeout(() => {
      getMovieRequest(searchValue);
    },
      1000);

    return () => {
      clearTimeout(timeOutId);
      console.log("Debounce greift");
    }

    //getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("movie-picker-list"));

    setAdded(savedList);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("movie-picker-list", JSON.stringify(items));
  };

  const addMovieToList = (movie) => {

    if (!added.includes(movie)) {

      //Checking if Movie is already on the List

      //console.log("added: ", added);
      //console.log("movie: ", movie);

      const newWatchList = [...added, movie];
      setAdded(newWatchList);

      saveToLocalStorage(newWatchList);
    }
  }

  const removeFromList = (movie) => {
    const newWatchList = added.filter((added) => added.imdbID !== movie.imdbID);
    setAdded(newWatchList);

    saveToLocalStorage(newWatchList);
  }

  const generateFile = () => {
    console.log("ok");
    let name = "File";
    let data = JSON.stringify(added);

    var blob = new Blob([data], { type: "text/plain;charset=utf-8" });
    FileSaver.saveAs(blob, name);
  }

  return (
    <div className='container-fluid movie-line'>
      <div className=''>
        <img src={mptitle} alt='movie-picker-title' className='title'></img>

        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      <MovieListHeader heading="Ergebnisse:" />
      <div className='results'>
        <MovieList
          movies={movies}
          addToListComponent={AddToList}
          handleAddsClick={addMovieToList} />
      </div>

      <MovieListHeader heading="Watch-List:" />
      <div className='results'>
        <MovieList
          movies={added}
          addToListComponent={RemoveFromList}
          handleAddsClick={removeFromList} />
      </div>
      <button className='btnSave' onClick={generateFile}>Datei speichern</button>
    </div>
  );
}

export default App;
