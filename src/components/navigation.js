import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import M from 'materialize-css';




export default class Navigation extends Component {
    componentDidMount() {
            let elems = document.querySelectorAll('.dropdown-trigger');
            M.Dropdown.init(elems, {
                inDuration: 300,
                outDuration: 225
            });
    }
    render() {
        return (
            <div>
                < ul id = "dd_menu"
                    className = "dropdown-content" >
                    <li><Link to="/time">Problema 2</Link></li>
                </ul>
                               
                 <nav className="blue accent-3" role="navigation">
                    <div className="nav-wrapper container">
                        <Link id="logo-container" to="/" className="brand-logo">Prueba Tuten</Link>
                    <ul className="right hide-on-med-and-down">
                        <li><a className="dropdown-trigger" href="#!" data-target="dd_menu">Menú
                            <i className="material-icons right">arrow_drop_down</i></a>
                        </li>
                    </ul>

                    <Link to="#" data-target="nav-mobile" className="sidenav-trigger">
                        <i className="material-icons">menu</i></Link>
                    </div>
                    
                </nav>
            </div>
            
        )
    }
}
