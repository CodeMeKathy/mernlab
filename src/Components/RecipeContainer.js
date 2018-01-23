// Include all logic
import React, { Component } from 'react'
import axios from 'axios'

import { CLIENT_URL } from '../constants.js'
import RecipeDetail from './RecipeDetail'

class RecipeContainer extends Component {
    state = {
        recipes: []

    }

}
	render () {
		let recipe = this.state.recipes[this.state.currentIndex]
		return
			<div>
			
			</div>
	}

export default RecipeContainer
