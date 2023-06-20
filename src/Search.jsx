import React, { useEffect, useState } from "react";
// import { ReactDOM } from "react";
import App from "./App";
import './cardStyle.css'

export const searchText = React.createContext();

function Search() {

    const [inputText, setInputText] = useState("");

    const [query, setQuery] = useState("Croissant");


    function handleChange(event) {
        setInputText(event.target.value);
    }

    function handleClick(e) {

        e.preventDefault();

        setQuery(inputText);
        // setInputText("");

    };

    return(
        <>
            <searchText.Provider value={query}>
                <App></App>
            </searchText.Provider>
            <div className="inputBarDiv">
            <input type="text" value={inputText} placeholder="Search Any Recipe!" onChange={handleChange} className="searchBar"></input>
            <button onClick={handleClick} className="submitButton">Enter</button>
            </div>
            
        </>
    )
}

export default Search;