import React from 'react'
import { Link } from 'react-router-dom'
// import '../css/RecipeList.css'


const RecipeList = (props) => {
  const recipes = props.recipes
  return (
    <div className='row'>
      <ul className='list-container'>
        {
          recipes.map((recipe, index) => {
            return (
              <Link to={{
                pathname: `/recipes/${recipe.title}`,
                state: { recipe: recipe }
              }}>
                <li className='list-li' key={index}>
                  {/* <div className='image-wrap'>
                    <img className='img-item-list image' src={recipe.imageUrl} alt="cover" />
                  </div> */}
                  <div>
                    <h5 className='title-list'>{recipe.title}</h5>
                  </div>
                </li>
              </Link>
            )
          })
        }
        </ul>
        </div>
        
  )
  
}

export default RecipeList
