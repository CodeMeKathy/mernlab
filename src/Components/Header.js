import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/Header.css' 

class Header extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper deep-orange darken-4">
                    <Link to="/" className="brand-logo center">Family Cookbook Manager</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/recipes">Recipes</Link></li>
                        <li><Link to="/tribute">Tribute</Link></li>
                        {/* <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li> */}
                    </ul>
                </div>
            </nav>
            // <nav className="pink accent-2">
            //     <div className="nav-wrapper">
            //         <Link to="/" className="brand-logo left">Juliaette Family Cookbook Manager</Link>
            //         <ul className="right hide-on-med-and-down">
            //             <li>
            //                 <Link to='/recipes'>Recipes</Link>
            //             </li>
            //         </ul>
            //     </div>
            // </nav>

        )
    }
}

export default Header
    // < nav className = "light-green darken-3" >
    //     <div className="nav-wrapper">
    //         <a href="/" className="right brand-logo">CannaSwap</a>
    //         <ul className="left hide-on-med-and-down">
    //             <li>
    //                 <a href="/Sign-up ">Sign-up</a>
    //             </li>
    //         </ul>
    //     </div>
    //   </nav >
