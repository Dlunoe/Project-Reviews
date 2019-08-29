import React, {Component} from 'react';

class Register extends Component{
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
        this.props.handleRegister(this.state)
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                Username:<input type="text" name="username" onChange={this.handleChange}/>
                Password:<input type="password" name="password" onChange={this.handleChange}/>
                <input type="submit" value="Log In"/>
            </form>
        )
    }
}

export default Register;