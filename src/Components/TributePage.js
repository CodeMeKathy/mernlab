import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import '../css/TributePage.css'

class TributePage extends Component {
 render() {
   return (
    <div className='page-container TributePage' id='Main'>
      <div className='row'>

        {/* <h1>Hello World</h1> */}
        <h1 id='title'> Juliaette Carroll </h1>
        <div id='img-div'>
          <img src="" alt="" id='image' />
        </div>
          <p>
            As a little girl from my Grandmommy's kitchen table I would watch her create dishes with such deep flavors that excited the pallet of this once young girl.  
          </p>

      </div>
    </div>
    )
  }
}

export default TributePage
