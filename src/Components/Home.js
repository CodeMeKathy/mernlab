import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/Home.css'

class Home extends Component {
  render() {
    return (
      <div className='page-container Home'>
        <div className='row'>
          <h1 className='heading'>Welcome</h1>
          <div className='home-btn'>
            <button className='btn'>
              <Link to='/recipes'>Recipes</Link>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
