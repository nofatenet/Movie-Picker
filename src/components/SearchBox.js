import React from "react";

const SearchBox = (props) => {
    return (
        <div className="">
            <input className="searchInput"
                value={props.value}
                onChange={
                    (event) => props.setSearchValue(event.target.value)
                }
                placeholder="Suche...">
            </input>
            <a href="https://www.omdbapi.com/" target="_blank" rel="noreferrer">OMDB</a><span> durchsuchen</span>
        </div>
    )
};

export default SearchBox;