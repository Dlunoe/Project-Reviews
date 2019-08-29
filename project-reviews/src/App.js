import React, {Compenent} from 'react';
import './App.css';
import ReviewsContainer from './Components/ReviewsContainer/ReviewsContainer';
import AuthGateway from './Components/AuthGateway/AuthGateway'

class App extends React.Component {
  constructor(){
    super();
    this.state={
      loggedIn:false,
      username: null
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
    console.log(parsedResponse)
    if(parsedResponse.status.code===8){
      this.setState({
        loggedIn:true,
        username:parsedResponse.status.username
      })
    }
  }
  render(){
    return (
      <div className="App">
        {this.state.loggedIn ?
        <ReviewsContainer/> :
        <AuthGateway handleRegister={this.handleRegister}/>
      }
      </div>
    );
  }
}

export default App;
