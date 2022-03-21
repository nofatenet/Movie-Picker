import React from "react";
import imdb from '../images/imdb.png';

const MovieList = (props) => {
    return (
        <>
            {props.movies ? props.movies.map((movieItem, index) =>
                <div
                    key={index}
                    className="tooltip">
                    <img
                        src={movieItem.Poster}
                        className="images"
                        alt="movie"
                        onClick={() => props.handleAddsClick(movieItem)}>
                    </img>

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
                : <p>No Data</p>
            }
        </>
    )
}

export default MovieList;
