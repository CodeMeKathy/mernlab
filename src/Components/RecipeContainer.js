// Include all logic
import React, { Component } from 'react'
import axios from 'axios'
import { CLIENT_URL } from '../constants'

import RecipeList from './RecipeList'
// import RecipeDetail from './RecipeDetail'

class RecipeContainer extends Component {
    state = {
        recipes: []
    }
componentDidMount () {
	axios.get('https://recipemanagerapi.herokuapp.com/')
	.then(response => this.setState({recipes: response.data.recipes}))
	// axios.get(`${CLIENT_URL}/recipes`)
	// .then(response => this.setState({ recipes: response.data }))

}
	render () {
		let recipes = this.state.recipes
		console.log('recipes is ', recipes)
		return (
			<div> {
			// recipes.map((recipe, currentIndex) => {
			// 	return <li key={currentIndex}>{recipe.title}</li>})
				<RecipeList recipes={recipes}/>
			}
			</div>
			)
		}
	}

export default RecipeContainer
