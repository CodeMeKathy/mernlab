import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <nav className="pink accent-2">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo center">Juliaette Family Cookbook Manager</Link>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <Link to='/recipes'>Recipes</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
}

export default Header
