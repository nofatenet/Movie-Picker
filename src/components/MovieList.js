import React from "react";

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
                        alt="movie"
                        //title={movieItem.Title + ' (' + movieItem.Year + ')'}
                        onClick={() => props.handleAddsClick(movieItem)}>
                    </img>
                    <AddToListComponent />
                    <span className="tooltiptext">
                        {movieItem.Title + ' (' + movieItem.Year + ')'}
                    </span>
                </div>
            )
            }
        </>
    )
}

export default MovieList;
