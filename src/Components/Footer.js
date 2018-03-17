import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer className="row black white-text">
                <div className="col s2">
                    <div className="footer-content">&copy; 2018 Copyright</div>
                </div>
                <div className="col s4 offset-s6">
                    <div className="footer-content">Homemade with &hearts; by Kathy Lambert</div>
                </div>

            </footer>
            )
    }
}

export default Footer


{/* //     <div className="footer-copyright black">
        //     <div className="container white-text text-lighten-4">
        //             © 2018 Copyright
        //     <a className="white-text text-lighten-4 right" href="#!">Designed with
        // <span className="color:red;">&#10084;</span> by
        // <span className="footer-name">Lotus Designs</span>
        //             </a>
        //     </div>
        //     </div> */}
