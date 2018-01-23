import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    )
  }
}

export default App
