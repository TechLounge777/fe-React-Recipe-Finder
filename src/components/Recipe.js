import React from 'react';

function Recipe(props) {
    console.log(props.data);
    
    return (
        <div className="col s12 l4">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img
                        className="activator"
                        src={props.data.recipe.image}
                        alt={props.data.recipe.label}/></div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{props.data.recipe.label}
                        <i className="material-icons right">more_vert</i>
                    </span>
                    <p>
                        <a href={props.data.recipe.url} target="_blank" rel="noopener noreferrer">{props.data.recipe.source}</a>
                    </p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Ingredients<i className="material-icons right">close</i>
                    </span>
                    <ul>
                        {props
                            .data
                            .recipe
                            .ingredientLines
                            .map(e => (
                                <li>{e}</li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>

    )

}
export default Recipe;