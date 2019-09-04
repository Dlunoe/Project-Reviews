import React, {Component} from 'react';
import Register from './Register/Register';
import Login from './Login/Login'

class AuthGateway extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return(
            <div>
                <h1>Log In</h1>
                <Login handleLogin={this.props.handleLogin}/>
                <Register handleRegister={this.props.handleRegister}/>
            </div>
        )
    }
}
export default AuthGateway;