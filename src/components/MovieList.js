import React from "react";
import imdb from '../images/imdb.png';

const MovieList = (props) => {
    const AddToListComponent = props.addToListComponent;
    return (
        <>
            {props.movies.map((movieItem, index) =>
                <div
                    key={index}
                    className="tooltip">
                    <img
                        src={movieItem.Poster}
                        className="images"
                        alt="movie"
                        onClick={() => props.handleAddsClick(movieItem)}>
                    </img>

                    <AddToListComponent />

                    <div className="tooltiptext">
                        <span>
                            {movieItem.Title + ' (' + movieItem.Year + ')'}
                        </span>
                        <p>
                            <a
                                href={`https://www.imdb.com/title/${movieItem.imdbID}`}
                                target="_blank"
                                rel="noreferrer">
                                <img src={imdb} alt="imdb link"></img>
                            </a>
                        </p>
                    </div>
                </div>
            )
            }
        </>
    )
}

export default MovieList;
