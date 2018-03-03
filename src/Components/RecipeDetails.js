import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CLIENT_URL } from '../constants'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
// import '../css/RecipeDetails.css'


class RecipeDetails extends Component {
  state = {
    recipe: this.props.location.state.recipe,
    toDashboard: false
  }
  handleDelete = () => {
    axios.delete(`${CLIENT_URL}/recipe/${this.state.recipe.title}`)
      .then(this.setState({ toDashboard: true }))
      .catch(err => console.log(err))
  }
  render() {
    let recipe = this.state.recipe
    if (this.state.toDashboard === true) return <Redirect to='/recipes' />
    return (
      <div>
        <div>
          <h1>{recipe.title}</h1>
          <div>
            {/* <img className='img-recipedetails' src={recipe.imageUrl} alt="recipe-image" /> */}
            <p>Description: {recipe.description}</p>
            <p>Ingredients: {recipe.ingredients}</p>
            <p>Instructions: {recipe.instructions}</p>
            <p>Cookbook: {recipe.cookbook}</p>
            <button>
              <Link to={{
                pathname: `/recipes/${recipe.title}/edit`,
                state: { recipe: recipe }
              }}>
                Edit
              </Link>
            </button>
            <button onClick={this.handleDelete}>
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
