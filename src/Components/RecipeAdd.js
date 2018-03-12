// Include all logic
import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { CLIENT_URL } from '../constants'

import RecipeList from './RecipeList'
// import RecipeDetail from './RecipeDetail'

class RecipeAdd extends Component {
  state = {
    recipe: {},
    toDashboard: false
  }
  // componentDidMount () {
  // 	axios.get('https://recipemanagerapi.herokuapp.com/')
  // 	.then(response => this.setState({recipes: response.data.recipes}))
  // 	// axios.get(`${CLIENT_URL}/recipes`)
  // 	// .then(response => this.setState({ recipes: response.data }))

  handleTitle = (e) => {
    if (e.target.value) this.setState({ recipe: Object.assign(this.state.recipe, { title: e.target.value }) })
  }
  handleDescription = (e) => {
    if (e.target.value) this.setState({ recipe: Object.assign(this.state.recipe, { description: e.target.value }) })
  }
  handleIngredients = (e) => {
    if (e.target.value) this.setState({ recipe: Object.assign(this.state.recipe, { ingredients: e.target.value }) })
  }
  handleInstructions = (e) => {
    if (e.target.value) this.setState({ recipe: Object.assign(this.state.recipe, { instructions: e.target.value }) })
  }
  handleCookbook = (e) => {
    if (e.target.value) this.setState({ recipe: Object.assign(this.state.recipe, { cookbook: e.target.value }) })
  }
  handleImage = (e) => {
    if (e.target.value) this.setState({ recipe: Object.assign(this.state.recipe, { imageUrl: e.target.value }) })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`${CLIENT_URL}`, { recipe: this.state.recipe })
      .then(this.setState({ toDashboard: true }))
      .catch(err => console.log('The client failed to connect to the remote API', err))
  }
  render() {
    let recipe = this.state.recipe
    console.log('recipe is ', recipe)
    if (this.state.toDashboard === true) {
      return <Redirect to={{
        pathname: `/recipes/${recipe.title}`,
        state: { recipe: recipe }
      }} />
    }
    return (
      <div className="container">
        <h4 className="center">Add a family recipe to your cookbook!</h4>
        {/* <div className="center container"> */}
        <div className="center row">
          <div className="center input-field col s10">
            <form className="center" action="/recipes" method="post">

              <input className="center" type="text" name="recipe[title]" placeholder="Title" onChange={this.handleTitle} />

              <input className="center" type="text" name="recipe[description]" placeholder="Description" onChange={this.handleDescription} />

              <input className="center" type="text" name="recipe[ingredients]" placeholder="Ingredients" onChange={this.handleIngredients} />

              <input className="center" type="text" name="recipe[instructions]" placeholder="Instructions" onChange={this.handleInstructions} />

              <input className="center" type="text" name="recipe[cookbook]" placeholder="Cookbook" onChange={this.handleCookbook} />

              <input className="center" type="text" name="recipe[cookbook]" placeholder="Cookbook" onChange={this.handleImage} />

              <input className=" center btn waves-effect waves-light pink accent-2 " type="submit" value="Add Recipe" />
            </form>
            {/* </div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default RecipeAdd
