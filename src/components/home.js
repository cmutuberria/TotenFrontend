import React, { Component } from 'react'
import {Link } from "react-router-dom"


export default class home extends Component {
    render() {
        return (
            <div>
                <h1>Bienvenido</h1>
                <ul className="collection">
                    <li className="collection-item"><Link to="/stack">Problema 1</Link></li>
                    <li className="collection-item"><Link to="/time">Problema 2</Link></li>
                    <li className="collection-item"><Link to="/login">Problema 3 - Login</Link></li>
                    <li className="collection-item"><Link to="/list">Problema 3 - bookings</Link></li>
                </ul>
            </div>
        )
    }
}
