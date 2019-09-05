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
                <h1>Welcome to Game Diaries</h1>
                <p>
                    This is an app intended to keep track of multiple game playthroughs. 
                    If you're like me, you've absolutely replayed some of your favorite videogames multiple times, and if you're like me, you've probably forgotten a lot of these.
                    The intention of this app is to give you a place to keep track of multiple playthroughs, letting you leave a description of the playthrough and how much you enjoyed it.
                    Due to the nature of this app, you'll need to be logged in to use any of it's features.
                </p>
                <Login handleLogin={this.props.handleLogin}/>
                <Register handleRegister={this.props.handleRegister}/>
            </div>
        )
    }
}
export default AuthGateway;