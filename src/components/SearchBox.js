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
            <p></p>
        </div>
    )
};

export default SearchBox;