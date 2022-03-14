import React from "react";

const MovieList = (props) => {
    const AddToListComponent = props.addToListComponent;
    return (
        <>
            {props.movies.map((movieItem, index) =>
                <>
                    <img
                        src={movieItem.Poster}
                        alt="movie"
                        title={movieItem.Title + ' (' + movieItem.Year + ')'}
                        onClick={() => props.handleAddsClick(movieItem)}>
                    </img>
                    <AddToListComponent />
                </>
            )
            }
        </>
    )
}

export default MovieList;
