import React from 'react';
import './cardStyle.css'

const Recipes = (props) => {

    const cardStyle = {
        
    }
    return(
        <>
        <div className="recipeStyle">
            <h1>{props.title}</h1>
            <ul>
                {props.ingredients.map(ingredient => (
                    <li className="lead">{ingredient.text}</li>
                ))}
            </ul>
            <p>Calories: {Math.floor(props.calories)}g</p>
            <img src={props.image} alt="Cannot display :("/>
        </div>
        </>
    );
}

export default Recipes;

// {title, calories, image, ingredients}