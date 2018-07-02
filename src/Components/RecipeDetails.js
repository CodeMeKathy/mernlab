import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CLIENT_URL } from '../constants'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import '../css/RecipeDetails.css'


class RecipeDetails extends Component {
  state = {
    recipe: this.props.location.state.recipe,
    toDashboard: false
  }
  handleDelete = () => {
    axios.delete(`${CLIENT_URL}/${this.state.recipe.title}`)
      .then(this.setState({ toDashboard: true }))
      .catch(err => console.log(err))
  }
  render() {
    let recipe = this.state.recipe
    if (this.state.toDashboard) return <Redirect to='/recipes' />
    let ingredients = recipe.ingredients.split("|") 
    let instructions = recipe.instructions.split("|")
    return (
      <div>
        <div>
          <h3 className="center">{recipe.title}</h3>
          <div className="recipe-details">
            <img className='img-recipedetails' src={recipe.imageUrl} alt="recipe-image" />
            <h5>Description</h5>
            <p>{recipe.description}</p>
            <h5>Ingredients</h5>
            <p><ul>{
              ingredients.map((ingredient, index) => {
                return (
                  <li key={index} className='ing-list'>
                    {ingredient}
                  </li>
                )
              })
            }</ul></p>
            <h5>Instructions</h5>
            <p><ul>{
              instructions.map((instruction, index) => {
                return (
                  <li key={index} className='ing-list'>
                    {instruction}
                  </li>
                )
              })
            }</ul></p>
            <h5>Cookbook</h5>
            <p>{recipe.cookbook}</p>
            <button className="btn">
              <Link to={{
                pathname: `/recipes/${recipe.title}/edit`,
                state: { recipe: recipe }
              }}>
                Edit
              </Link>
            </button>
            <button className="btn" onClick={this.handleDelete}>
              <Link to={{
                pathname: `/recipes/${recipe.title}`,
                state: { recipe: recipe }
              }}>
                Delete
              </Link>
            </button>

          </div>
        </div>

      </div>
    )
  }
}

export default RecipeDetails
