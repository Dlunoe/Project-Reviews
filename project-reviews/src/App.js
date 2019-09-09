import React from 'react';
import './App.css';
import ReviewsContainer from './Components/ReviewsContainer/ReviewsContainer';
import AuthGateway from './Components/AuthGateway/AuthGateway'

class App extends React.Component {
  constructor(){
    super();
    this.state={
      loggedIn:false,
      username: null,
      userID: null
    }
  }
  handleRegister = async (formData)=>{
    const registerResponse = await fetch('http://localhost:9000/user/register', {
      method:"POST",
      body: JSON.stringify(formData),
      credentials: "include",
      headers:{
        "Content-Type": "application/json"
      }
    })
    const parsedResponse = await registerResponse.json();
    await console.log(parsedResponse)
    //duplicate code = 11000
    if(parsedResponse.code===11000){
      alert("Username is already taken");
    }
    else if(parsedResponse.status.code===8){
      this.setState({
        loggedIn:true,
        username:parsedResponse.status.data.username
      })
    }
  }
  handleLogin = async(formData)=>{
    const registerResponse = await fetch('http://localhost:9000/user/login',{
      method: "POST",
      body: JSON.stringify(formData),
      credentials: "include",
      headers:{
        "Content-Type": "application/json"
      }
    })
    console.log(registerResponse)
    const parsedResponse = await registerResponse.json();
    await console.log(parsedResponse)
    if(parsedResponse.status.code===7){
      this.setState({
        loggedIn:true,
        username: parsedResponse.data.username,
        userID:parsedResponse.data._id
      })
    }
  }
  render(){
    return (
      <div className="App">
        {this.state.loggedIn ?
        <ReviewsContainer username={this.state.username} userID={this.state.userID}/> :
        <AuthGateway handleRegister={this.handleRegister} handleLogin={this.handleLogin}/>
      }
      </div>
    );
  }
}

export default App;
