import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (<div className="footer-copyright page-footer black">
                <div className="page-footer black left">
                    © 2018 Copyright
                </div>
                <div className="page-footer black right">
                    Designed with <span className="red">&#10084;</span> by
                    <span> Lotus Designs</span>
                </div>
            </div>)
    }
}

export default Footer
