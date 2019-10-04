import React, { Component } from 'react'

export default class stack extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h1>Stack Postgres/Java8/React</h1>
                    <div className="row">
                        <div className="col s6">
                            <h3>Backend</h3>
                            <p>Gestor de Base de datos: PostgreSQL.</p>
                            <p>Lenguaje de programación: Java versión 8.</p>
                            <p>Gestor de dependencias: Maven.</p>
                            <p>Framework: Spring Boot</p>
                            <ul>
                                <li>•	Spring Web</li>
                                <li>•	Spring Data JPA</li>
                                <li>•	Spring Security</li>
                                <li>•	JUnit</li>
                                <li>•	Driver de conexión org.postgresql.Driver</li>
                            </ul>
                        </div>
                        <div className="col s6">
                            <h3>Frontend</h3>
                            <p>Lenguaje de programación: JavaScript.</p>
                            <p>Gestor de dependencias: Yarn.</p>
                            <p>Aplicación React/Redux con las siguientes dependencias:</p>
                            <ul>
                                <li>•	redux-thunk para usar funciones asíncronas en redux.</li>
                                <li>•	redux-localstorage para elegir que parte del store de redux guardar/gestionar en localstorage.</li>
                                <li>•	react-router-dom para gestionar rutas dinámicas.</li>
                                <li>•	axios para gestionar las peticiones HTTP al backend.</li>
                                <li>•	framework css materializecss, material-ui, bootstrap o diseñar utilizando flexbox.</li>
                            </ul>
                        </div>
                        <div className="col s12">
                            <h3>Comunicación Front-Back</h3>
                            <p> La comunicación entre el Frontend y el 
                                Backend será mediante los servicios REST y 
                                la información se enviará en formato JSON. </p>
                        </div>

                    </div>
                    

                </div>
            </div>
        )
    }
}
