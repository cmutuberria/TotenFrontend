import React, { Component } from 'react'
import Axios from 'axios';
import { connect } from "react-redux";
import saveUserAuth from '../redux/actions/saveUserAuth'
import clearUserAuth from "../redux/actions/clearUserAuth";


class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:"",
            app:"",
            password:"",
            hasError:false,
            errorMsg:""
        }
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

     onSubmit = async  (e) => {
        e.preventDefault();
        try {
            const response = await Axios.put('https://dev.tuten.cl:443/TutenREST/rest/user/'+this.state.email, {}, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "app": this.state.app,
                    "password": this.state.password

                }
            });
            console.log(response.data);
            if (response.data) {
                const userAuthenticated = response.data;
                const token = response.data.sessionTokenBck;
                this.props.saveUserAuth(token, userAuthenticated);
                this.props.history.push('/');
            } else {
                this.props.clearUserAuth();
                this.setState({
                    hasError:true,
                    errorMsg: response.data.message
                })
            }            
        } catch (error) {
            console.error(error);
        }
    };
    render() {
        return (
            <div className="row container">
                < div className = "col s6 offset-s3" >
                    <h4 className="">Formulario de Autenticación</h4>
                    {this.state.hasError&&
                    <div className="card-panel red darken-1">{this.state.errorMsg}</div>}
                    <div className="card ">
                        <div className="card-content">
                            <form>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input
                                        name = "email"
                                        id = "email"
                                        type = "text"
                                        className="validate" value={this.state.email}
                                        onChange={this.onChange}/>
                                        <label htmlFor="email" className="active">Email</label>
                                    </div>                    
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input
                                        name = "app"
                                        id = "app"
                                        type = "text"
                                        className="validate" value={this.state.app}
                                        onChange={this.onChange}/>
                                        <label htmlFor="app" className="active">App</label>
                                    </div>                    
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        < input value = {this.state.password}
                                        name = "password"
                                        id = "password"
                                        type = "password"
                                        className="validate" onChange={this.onChange}/>
                                        <label htmlFor="password" className="active">Password</label>
                                    </div>
                                </div>
                                <div className = "row " >
                                    < div className = "col s6 left-align" >
                                        {<button type="submit" className = "waves-effect waves-light btn" 
                                            onClick={this.onSubmit.bind(this)}> Entrar</button>}
                                    </div>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        userAuthenticated: state.userAuthenticated
    }
}

const mapDispatchToProps = {
        saveUserAuth,
        clearUserAuth
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)