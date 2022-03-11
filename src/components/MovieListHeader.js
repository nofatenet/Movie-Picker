import React from "react";

const MovieListHeader = (props) => {
    return (
        <div className="col">
            <p>{props.heading}</p>
        </div>
    )
}

export default MovieListHeader;