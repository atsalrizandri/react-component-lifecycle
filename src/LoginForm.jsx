import React, { Component } from 'react';
import './assets/Style.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
      hasError: false
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validateForm = () => {
    var emailError = '';
    var passwordError = '';

    if (!this.state.email.includes('@')) {
      emailError = 'Invalid @domain email';
    }

    if (this.state.password.length < 6) {
      passwordError = 'Password must be at least 6 characters';
    }

    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
      return false;
    }

    return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validateForm();
    if (isValid) {
      console.log('Form submitted');
      this.setState({ emailError: '', passwordError: '' });
      this.props.onLoginSuccess();
    }
  };

  render() {
    return (
      <div className="login-container">
        <h2>Sign In</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              className={this.state.emailError ? 'input-error' : ''}
            />
            {this.state.emailError && <span className="input-error-message">{this.state.emailError}</span>}
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              className={this.state.passwordError ? 'input-error' : ''}
            />
            {this.state.passwordError && <span className="input-error-message">{this.state.passwordError}</span>}
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;