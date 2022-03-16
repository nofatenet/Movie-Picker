import React from "react";

const MovieListHeader = (props) => {
    return (
        <div className="col">
            <h2>{props.heading}</h2>
        </div>
    )
}

export default MovieListHeader;