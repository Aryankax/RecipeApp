import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Search from "./Search";
import { searchText } from "./Search";
import Recipes from "./Card";

function recipeMap(val) {
    return(
        <Recipes
            title={val.recipe.label}
            calories={val.recipe.calories}
            image={val.recipe.image}
            ingredients={val.recipe.ingredients}
        />
    )

}

function App() {

    const SearchFieldText = useContext(searchText);

    const [recipe, setRecipes] = useState([]);

    useEffect(() => {

        async function getData() {

            console.log(SearchFieldText);

            const res = await axios.get(`https://api.edamam.com/search?&q=${SearchFieldText}&app_id=49ca418f&app_key=94fdb91aa353e73979b10c1877feb7f1`);

            // console.log(res);

            const recipeData = res.data.hits;

            // console.log(recipeData);

            setRecipes(recipeData)
            
        }
        

        getData();
    }, [SearchFieldText])

    return(
        <>
           {recipe.map(recipeMap)} 
        </>
    )
}

export default App;