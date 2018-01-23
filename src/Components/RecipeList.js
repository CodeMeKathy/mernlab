import React, { Component } from 'react'

class RecipeList extends Component {
    render() {
        return (
            <div className="page-container">
        
             <h4 class="center">Add a family recipe to your cookbook!</h4>

                <form class="center" action="/recipes" method="post">
                <input class="center" type="text" name="recipe[title]" placeholder="Title"/>
                <input class="center" type="text" name="recipe[description]" placeholder="Description"/>
                <input class="center" type="text" name="recipe[ingredients]" placeholder="Ingredients"/>
                <input class="center" type="text" name="recipe[instructions]" placeholder="Instructions"/>
                <input class=" center btn waves-effect waves-light pink accent-2 "type="submit" value="Add Recipe"/>
                </form>
        
            </div>
        )
    }
}

export default RecipeList
