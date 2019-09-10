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
            <div class="auth-container">
                <header class="header">
                <h1>Welcome to Game Diaries</h1>
                </header>
                
                <p class="register-body">
                    This is an app intended to keep track of multiple game playthroughs. 
                    This app will allow you to log multiple playthrougs of videogames, with the intent that you can use these logs to determine if a playthrough is worth replaying or returning to in the future.
                </p>
                <Login handleLogin={this.props.handleLogin}/>
                <Register handleRegister={this.props.handleRegister}/>
            </div>
        )
    }
}
export default AuthGateway;