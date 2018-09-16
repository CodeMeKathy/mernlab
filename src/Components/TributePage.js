import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/TributePage.css'

class TributePage extends Component {
 render() {
   return (
    <div className='page-container TributePage' id='Main'>
      <div className='row'>

        {/* <h1>Hello World</h1> */}
        <h1 id='title'> Juliaette Carroll </h1>
        <div id='img-div' className='center' >
          <img src="https://github.com/Kathy145/mernlab/blob/tributePage/public/welcome.png?raw=true" alt="A picture of Juilaette Carroll" id='image' />
          <h6 id='img-caption'>Juliaette Carroll with her husband, Walter Carroll, of 60 years. </h6>
        </div>
          <p id='tribute-info'>
          As a little girl from my Grandmommy's kitchen table, I would watch her create dishes with such deep flavors that excited the pallet of this once young girl.  As a curious young child, I was inquisitive and craved to know the recipe continents and how to make it taste just like my when Grandmommy made it. So I began asking my grandmother questions and recording her recipes as you see she did everything by memory or maybe instinct.

          <br/>
          <br/>
          Many ions later, as a developer, it accord to me that I could recreate my beloved Grandmommy's recipes which I had typed up and printed in a binder.  I could create a place where her recipes could be stored and accessed remotely by all my cousins.  Better yet they could add their recipes learned from our Grandmother.  We could all access and honor her memory while being able to share her recipes with generations to come.
          </p>

      </div>
    </div>
    )
  }
}

export default TributePage
