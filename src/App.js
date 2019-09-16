import React from 'react';
import { Redirect } from 'react-router-dom';
import './App.css';
import axios from "axios";

import Login from './component/auth/login';
import Register from './component/auth/register';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      signup: false,
      username: '',
      password: '',
    }
  }

  handleSignup(){
    this.setState({
      signin: false
    })
  }

  handleUsername = evt =>  {
    this.setState({
      username: evt.target.value
    })
  }

  handlePassword = evt =>  {
    this.setState({
      password: evt.target.value
    })
  }

  async handleLogin(){
    let username = this.state.username;
    let password = this.state.password;

    const data = {
      username,
      password
    }

    const config = {
      headers: {
        "Content-Type": 'application/x-www-form-urlencoded'
      }
    }

    await axios.post('https://task-service-api.herokuapp.com/auth/login', data)
    .then(async (response) => {
      await localStorage.setItem('_token', response.data.token)
      await localStorage.setItem('userId', response.data.user._id)
      await localStorage.setItem('isAuthenticated', true)
      this.setState({
        signin: true
      })
      await this.props.history.push('/home')
    })
    .catch((err) => alert(err))
  }

  render(){
    return( !this.state.signup ?
      <div>
        <Login handledSignup={this.handleSignup.bind(this)} login={this.handleLogin.bind(this)} handleUsername={this.handleUsername.bind(this)} handlePassword={this.handlePassword.bind(this)} />
      </div>
      :
      <Register />
    )
  }
}


export default App;
