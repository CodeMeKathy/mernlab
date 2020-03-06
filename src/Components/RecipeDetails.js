import React, { Component } from 'react'
import { CLIENT_URL } from '../constants'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import '../css/RecipeDetails.css'

class RecipeDetails extends Component {
  state = {
    recipe: this.props.location.state.recipe,
    toDashboard: false
  }
  handleDelete = () => {
    axios
      .delete(`${CLIENT_URL}/${this.state.recipe.title}`)
      .then(this.setState({ toDashboard: true }))
      .catch(err => console.log(err))
  }
  render() {
    let recipe = this.state.recipe
    if (this.state.toDashboard === true) return <Redirect to='/recipes' />
    let ingredients = [] || recipe.ingredients.split('|')
    let instructions = [] || recipe.instructions.split('|')
    return (
      <div>
        <div>
          <h3 className='center recipe-title'>{recipe.title}</h3>
          <div className='recipe-details-div'>
            {recipe.imageUrl ? (
              <img
                className='img-recipe'
                src={recipe.imageUrl}
                alt='recipe-image'
              />
            ) : (
              <div>
                This recipe doesn't have an image yet. Is this your recipe? Add
                one{' '}
                <Link
                  to={{
                    pathname: `/recipes/${recipe.title}/edit`,
                    state: { recipe: recipe }
                  }}
                >
                  here
                </Link>
                !
              </div>
            )}
            <h5 className='desc-heading'>Description</h5>
            {recipe.description ? (
              <p>{recipe.description}</p>
            ) : (
              <div className='desc-text'>
                This recipe doesn't have a description yet. Is this your recipe?
                Add one{' '}
                <Link
                  to={{
                    pathname: `/recipes/${recipe.title}/edit`,
                    state: { recipe: recipe }
                  }}
                >
                  here
                </Link>
                !
              </div>
            )}
            <h5 className='ingredients-heading'>Ingredients</h5>
            {ingredients.length > 0 ? (
              <p>
                <ul>
                  {ingredients.map((ingredient, index) => {
                    return (
                      <li key={index} className='ing-list'>
                        {ingredient}
                      </li>
                    )
                  })}
                </ul>
              </p>
            ) : (
              <div>
                This recipe doesn't have ingredients yet. Is this your recipe?
                Add some{' '}
                <Link
                  to={{
                    pathname: `/recipes/${recipe.title}/edit`,
                    state: { recipe: recipe }
                  }}
                >
                  here
                </Link>
                !
              </div>
            )}
            <h5 className='inst-heading'>Instructions</h5>
            {instructions.length > 0 ? (
              <p>
                <ul>
                  {instructions.map((instruction, index) => {
                    return (
                      <li key={index} className='ing-list'>
                        {instruction}
                      </li>
                    )
                  })}
                </ul>
              </p>
            ) : (
              <div>
                This recipe doesn't have instructions yet. Is this your recipe?
                Add some{' '}
                <Link
                  to={{
                    pathname: `/recipes/${recipe.title}/edit`,
                    state: { recipe: recipe }
                  }}
                >
                  here
                </Link>
                !
              </div>
            )}
            <h5 className='cookbook-name-heading'>Cookbook</h5>
            {recipe.cookbook ? (
              <p>{recipe.cookbook}</p>
            ) : (
              <div>
                This recipe doesn't isn't in a cookbook yet. Is this your
                recipe? Add it to one{' '}
                <Link
                  to={{
                    pathname: `/recipes/${recipe.title}/edit`,
                    state: { recipe: recipe }
                  }}
                >
                  here
                </Link>
                !
              </div>
            )}

            <div>
              <button className='btn'>
                <Link to='/recipes'>Back</Link>
              </button>
              <button className='btn'>
                <Link
                  to={{
                    pathname: `/recipes/${recipe.title}/edit`,
                    state: { recipe: recipe }
                  }}
                >
                  Edit
                </Link>
              </button>
              <button className='btn' onClick={this.handleDelete}>
                <Link
                  to={{
                    pathname: `/recipes/${recipe.title}`,
                    state: { recipe: recipe }
                  }}
                >
                  Delete
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RecipeDetails
