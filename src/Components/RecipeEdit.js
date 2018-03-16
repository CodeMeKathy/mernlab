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

  handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`${CLIENT_URL}/${this.state.recipe.title}`, { recipe: this.state.recipe })
      .then(this.setState({ toDashboard: true }))
      .then(res => console.log('res is ', res))
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
          {/* <textarea id="input-text col s4" className="materialize-textarea" type="text"value={recipe.title} onChange={this.handleTitle} />

          <textarea id="input-text" className="materialize-textarea" type="text" value={recipe.description} onChange={this.handleDescription} />

          <textarea id="input-text" className="materialize-textarea" type="text"value={recipe.ingredients} onChange={this.handleIngredients} />

          <textarea id="inst1" className="materialize-textarea" type="text" value={recipe.instructions} onChange={this.handleInstructions} />

          <textarea id="input-text" className="materialize-textarea" type="text" value={recipe.cookbook} onChange={this.handleCookbook} />

          <textarea id="input-text" className="materialize-textarea" type="text" value={recipe.imageUrl} onChange={this.handleImage} />

          <input type="button" className="edit-btn" value="submit" onClick={this.handleSubmit} /> */}
          <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="input-field col s6">
          <input id="title" name="title" type="text" defaultValue={recipe.title} onChange={this.handleTitle} />
          <label className={recipe.title && "active"} htmlFor="name">Title</label>
        <div className="input-field col s6">
          <input id="description" name="description" type="text" defaultValue={recipe.description} onChange={this.handleDescription} />
          <label className={recipe.description && "active"} htmlFor="description">Description</label>
        </div>
        <div className="input-field col s6">
          <input id="ingredients" name="ingredients" type="text" defaultValue={recipe.ingredients} onChange={this.handleIngredients} />
          <label className={recipe.ingredients && "active"} htmlFor="ingredients">Ingredients</label>
        </div>
        <div className="input-field col s6">
          <input id="instructions" name="instructions" type="text" defaultValue={recipe.instructions} onChange={this.handleInstructions} />
          <label className={recipe.instructions && "active"} htmlFor="instructions">Instructions</label>
        </div>
        <div className="input-field col s6">
          <input id="imageUrl" name="imageUrl" type="text" defaultValue={recipe.imageUrl} onChange={this.handleImage} />
          <label className={recipe.imageUrl && "active"} htmlFor="imageUrl">Image Link</label>
        </div>
        <div className="input-field col s6">
          <input id="cookbook" name="cookbook" type="text" defaultValue={recipe.cookbook} onChange={this.handleCookbook} />
          <label className={recipe.cookbook && "active"} htmlFor="cookbook">Cookbook</label>
        </div>
        <div className="center">
          <input type="submit" className="btn" />
        </div>
        </div>
        </form>
        </div>
      </div>
    )
  }
}

export default RecipeEdit

