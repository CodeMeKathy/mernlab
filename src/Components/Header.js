import React, { Component } from 'react'

class Header extends Component {
    render() {
        return <div className='page-container'>
                <nav className="nav-wrapper cyan lighten-2">
                    <div className="container">
                        <a href="/" className="brand-logo left">Juliaette Family Cookbook Manager </a>
                    </div>
                </nav>
            </div>
    }
}

export default Header
