import React, { Component } from 'react'
import '../css/App.css' 
import {Switch, Route} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import RecipeContainer from './RecipeContainer'
import RecipeList from './RecipeList'
import RecipeDetails from './RecipeDetails'
import RecipeEdit from './RecipeEdit'
import RecipeAdd from './RecipeAdd'

class App extends Component {
  render() {
    return (
      <div className="App">
            <Header />
            <main>
                <Switch>
                    <Route exact path='/' render={() => (<Home />)} />
                    <Route exact path='/recipes' render={(props) => (<RecipeContainer {...props} />)} />
                    <Route exact path='/recipes/add' render={(props) => (<RecipeAdd {...props} />)} />
                    <Route path='/recipes/:name/edit' render={(props) => (<RecipeEdit {...props} />)} />
                    <Route path='/recipes/:name' render={(props) => (<RecipeDetails {...props} />)} />              
                </Switch>
            </main>
            <Footer />
        </div>
        )
  }
}
export default App

