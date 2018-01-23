import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <nav className="pink accent-2">
                <div className="nav-wrapper">
                <a href="/" className="brand-logo center">Juliaette Family Cookbook Manager</a>
                <ul className="right hide-on-med-and-down">
                <li>
                    <a href="/recipes ">Recipes</a>
                </li>
            </ul>
        </div>
    </nav>

        )
    }
}

export default Header
