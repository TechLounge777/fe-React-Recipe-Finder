
import React, {Component, Fragment} from 'react';
import Recipe from './Recipe';
import API from './../utils/API';

class RecipeSearch extends Component {
    state = {
        recipes: [],
        input: ''
    }

    searchRecipes = query => {
        console.log(query);
        API
            .search(query)
            .then(res => this.setState({recipes: res.data.hits}))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const {value, name} = event.target;
        console.log(value + name);
        this.setState({[name]: value});
    }

    handleFormSubmit = event => {
        event.preventDefault();
        
        this.searchRecipes(this.state.input);
    }

    render() {
        return (
            <Fragment>
                <header className="container">
                    <h1>Recipe Search</h1>
                </header>
                <section className="container">
                    <form>
                        <input value={this.state.input} onChange={this.handleInputChange} name='input'/>
                        <button onClick={this.handleFormSubmit} className="btn">Search</button>
                    </form>
                </section>
                <section className="container">
                    <div className="row">
                        {this
                            .state
                            .recipes
                            .map(recipe => (<Recipe data={recipe}/>))}

                    </div>
                </section>
            </Fragment>

        );
    }
}

export default RecipeSearch;