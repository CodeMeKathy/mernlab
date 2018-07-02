import React, { Component } from 'react'
import axios from 'axios'
import { CLIENT_URL } from '../constants'
import RecipeList from './RecipeList'

class RecipeContainer extends Component {
    state = {
        recipes: []
    }
componentDidMount () {
	axios.get(`${CLIENT_URL}`)
	.then(response => this.setState({recipes: response.data.recipes}))
}
	render () {
		let recipes = this.state.recipes
		console.log('recipes is ', recipes)
		return (
			<div> {
				<RecipeList recipes={recipes}/>
			}
			</div>
			)
		}
	}

export default RecipeContainer
