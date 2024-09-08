import React, { Component } from 'react';
import './App.css';
import LoginForm from './LoginForm';
import Home from './Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  componentDidMount() {
    const savedLoginStatus = localStorage.getItem('isLoggedIn');
    if (savedLoginStatus === 'true') {
      this.setState({ isLoggedIn: true });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.isLoggedIn !== this.state.isLoggedIn) {
      localStorage.setItem('isLoggedIn', this.state.isLoggedIn);
    }
  }

  componentWillUnmount() {
    localStorage.removeItem('isLoggedIn');
  }

  handleLoginSuccess = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
    localStorage.removeItem('isLoggedIn');
  };

  render() {
    return (
      <div className="App">
        {this.state.isLoggedIn ? (
          <Home onLogout={this.handleLogout} /> 
        ) : (
          <LoginForm onLoginSuccess={this.handleLoginSuccess} />
        )}
      </div>
    );
  }
}

export default App;
