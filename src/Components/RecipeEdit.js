import React, { Component } from 'react'
import axios from 'axios'
import { CLIENT_URL } from '../constants'
import { Redirect, Link } from 'react-router-dom'
import '../css/RecipeEdit.css'

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
      <div className="center">
        <h3>Edit Your Recipe</h3>
        <h5>{recipe.title}</h5>
        <div className="recipe-details center">
          <form className="col s12 center" onSubmit={this.handleSubmit}>
          <div className="input-field col s6">
          <textarea id="title" name="title" type="text" className="materialize-textarea" defaultValue={recipe.title} onChange={this.handleTitle}></textarea>
          <label className={recipe.title && "active"} htmlFor="name">Title</label>
        <div className="input-field col s6">
          <textarea id="description" name="description" type="text" className="materialize-textarea" defaultValue={recipe.description} onChange={this.handleDescription}></textarea>
          <label className={recipe.description && "active"} htmlFor="description">Description</label>
        </div>
        <div className="input-field col s6">
          <textarea id="ingredients" name="ingredients" type="text" className="materialize-textarea" defaultValue={recipe.ingredients} onChange={this.handleIngredients}></textarea>
          <label className={recipe.ingredients && "active"} htmlFor="ingredients">Ingredients</label>
        </div>
        <div className="input-field col s6">
          <textarea id="instructions" name="instructions" type="text" className="materialize-textarea" defaultValue={recipe.instructions} onChange={this.handleInstructions}></textarea>
          <label className={recipe.instructions && "active"} htmlFor="instructions">Instructions</label>
        </div>
        <div className="input-field col s6">
          <textarea id="imageUrl" name="imageUrl" type="text" className="materialize-textarea" defaultValue={recipe.imageUrl} onChange={this.handleImage}></textarea>
          <label className={recipe.imageUrl && "active"} htmlFor="imageUrl">Image Link</label>
        </div>
        <div className="input-field col s6">
          <textarea id="cookbook" name="cookbook" type="text" className="materialize-textarea" defaultValue={recipe.cookbook} onChange={this.handleCookbook}></textarea>
          <label className={recipe.cookbook && "active"} htmlFor="cookbook">Cookbook</label>
        </div>
        <div className="center">
          <button className="btn">
            <Link to={`/recipes/${recipe.title}`}>Back</Link>
          </button>
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
