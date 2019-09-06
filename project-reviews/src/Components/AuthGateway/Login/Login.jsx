import React, {Component} from 'react';

class Login extends Component{
    constructor(){
        super();
        this.state={
            username:null,
            password: null
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.handleLogin(this.state)
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                Username:<input type="text" name="username" onChange={this.handleChange}/>
                Password:<input type="password" name="password" onChange={this.handleChange}/><br/>
                <input type="submit" value="Log In"/>
            </form>
        )
    }
}

export default Login;