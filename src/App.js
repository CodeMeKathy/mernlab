import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'
import RecipeContainer from './Components/RecipeContainer'
import RecipeList from './Components/RecipeList'
// import RecipeDetails from './Components/RecipeDetails'

class App extends Component {
  render() {
    return (
      <div className="App">
            <Header />
            <main>
                <Switch>
                    <Route path="/recipes" render={(props) => (<RecipeContainer {...props} />)} />
                    <Route path="/" render={() => (<Home />) } />
                    <Route path="/recipelist" render={() => (<RecipeList />)} />
                    {/* <Route path="/recipedetails" render={() => (<RecipeDetails />)} /> */}
                </Switch>
            </main>
            <Footer />
        </div>
        )
  }
}

export default App

