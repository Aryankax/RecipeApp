import React, { useEffect, useState } from "react";
// import { ReactDOM } from "react";
import App from "./App";
import './cardStyle.css'

export const searchText = React.createContext();

function Search() {

    const [inputText, setInputText] = useState("");

    const [query, setQuery] = useState("");

    // const SearchFieldText = useContext(searchText);

    // const [recipe, setRecipes] = useState([]);

    // useEffect(() => {

        // async function getData() {

        //     console.log(SearchFieldText);

        //     if(SearchFieldText!=""){
        //         const res = await axios.get(`https://api.edamam.com/search?&q=${SearchFieldText}&app_id=49ca418f&app_key=94fdb91aa353e73979b10c1877feb7f1`);

        //         const recipeData = res.data.hits;
        
        //         setRecipes(recipeData)
        //     } 
            
        // }
        

        // getData();
    // }, [SearchFieldText])


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