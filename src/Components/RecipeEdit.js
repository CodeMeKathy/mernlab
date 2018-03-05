import React, { Component } from 'react'
import axios from 'axios'
import { CLIENT_URL } from '../constants'
import '../css/RecipeEdit.css'

import { Redirect } from 'react-router-dom'

class RecipeEdit extends Component {
  state = {
    recipe: this.props.location.state.recipe,
    toDashboard: false
  }

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

  handleSubmit = () => {
    axios.put(`${CLIENT_URL}/recipes/${this.state.recipe.title}`, { recipe: this.state.recipe })
      .then(this.setState({ toDashboard: true }))
      .catch(err => console.log('Oops!', err))
  }

  render() {
    let recipe = this.state.recipe
    console.log('recipe is', recipe)
    if (this.state.toDashboard === true) {
      return <Redirect to={{
        pathname: `/recipes/${recipe.title}`,
        state: { recipe: recipe }
      }} />
    }
    return (
      <div>
        <h1>{recipe.title}</h1>
        <div>
          <h4>Edit Recipe</h4>
          <textarea id="input-text col s4" className="materialize-textarea" type="text"value={recipe.title} onChange={this.handleTitle} />

          <textarea id="input-text" className="materialize-textarea" type="text" value={recipe.description} onChange={this.handleDescription} />

          <textarea id="input-text" className="materialize-textarea" type="text"value={recipe.quality} onChange={this.handleIngredients} />

          <textarea id="inst1" className="materialize-textarea" type="text" value={recipe.instructions} onChange={this.handleInstructions} />

          <textarea id="input-text" className="materialize-textarea" type="text" value={recipe.cookbook} onChange={this.handleCookbook} />

          <textarea id="input-text" className="materialize-textarea" type="text" value={recipe.imageUrl} onChange={this.handleImage} />

          <input type="button" className="edit-btn" value="submit" onClick={this.handleSubmit} />
        </div>
      </div>
    )
  }
}

export default RecipeEdit

