import React, { Component } from 'react'
import {Switch, Route} from 'react'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'
import RecipeContainer from './Components/RecipeContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RecipeContainer />
          <main>
          {/* <Switch> */}
          {/* <Route path="/" /> */}
          {/* <Route path='/Recipes' render={ () => () /> */}

          
          {/* </Switch> */}
            
          </main>
        <Footer />
      </div>
    )
  }
}

export default App

        //   <Switch>
        //     <Route path="/about" render={() => (<About />) } />
        //     <Route path="/stocks/*" render={() => (<StockDetails />)}/>
        //     <Route path="/stocks" render={() => (<Stocks />)}/>
        //     <Route path="/" render={() => (<Stocks />)}/>
        // </Switch>
