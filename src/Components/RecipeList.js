import React from 'react'
import { Link } from 'react-router-dom'
import '../css/RecipeList.css'


const RecipeList = (props) => {
  let recipes = props.recipes
  return (
    <div className='row'>
      <ul className='list-container'>
        {
          recipes.map((recipe, index) => {
            return (
                <li key={index} className='list-li'>
                <Link to={{
                  pathname: `/recipes/${recipe.title}`,
                  state: { recipe: recipe }
                  }}>
                  {/* <div className='image-wrap'>
                    <img className='img-item-list image' src={recipe.imageUrl} alt="cover" />
                  </div> */}
                  <div>
                    <h5 className='title-list'>{recipe.title}</h5>
                  </div>
              </Link>
                </li>
            )
          })
        }
        </ul>
      <div>
        <button className="btn white center">
          <Link to='/recipes/add'>Add</Link>
        </button>
      </div>
    </div>
        
  )
  
}

export default RecipeList
