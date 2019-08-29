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
                <h1>Register as new user</h1>
                <Register handleRegister={this.props.handleRegister}/>
            </div>
        )
    }
}
export default AuthGateway;