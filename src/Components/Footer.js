import React, { Component } from 'react'
import '../css/Footer.css'
class Footer extends Component {
  render() {
    return (
      <footer className='footer-row black white-text'>
        <div className='col footer-col1'>
          <div className=' footer-content'>
          CodeMeKathy &copy; 2020
          </div>
        </div>
        <div className='col footer-col2'>
          <div className=' footer-content'>
            Homemade with &hearts; by Kathy Lambert
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer

{
  /* //     <div className="footer-copyright black">
        //     <div className="container white-text text-lighten-4">
        //             © 2018 Copyright
        //     <a className="white-text text-lighten-4 right" href="#!">Designed with
        // <span className="color:red;">&#10084;</span> by
        // <span className="footer-name">Lotus Designs</span>
        //             </a>
        //     </div>
        //     </div> */
}
