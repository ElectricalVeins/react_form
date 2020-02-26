import React, { Component } from 'react';
import styles from './SignUpForm.module.css';
import TextInput from '../TextInput';
import {
  USER_NAME_PATTERN,
  LOGIN_PATTERN,
  EMAIL_PATTERN,
  PASSWORD_PATTERN
} from '../../constants/index.js';

class SignUpForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      signUpData: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirm: '',
      },
      user: {}
    };
  }

  handleInput = (e) => {
    this.setState({
                    signUpData: {
                      ...this.state.signUpData,
                      [e.target.name]: e.target.value
                    },
                  });
  };

  checkPassword = () => {
    return (this.state.signUpData.password ===
            this.state.signUpData.passwordConfirm);
  };

  submitHandler = e => {
    e.preventDefault();

    if (this.checkPassword()) {
      const data = { ...this.state.signUpData };
      delete data.passwordConfirm;

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      };

      fetch('http://192.168.0.106:3000/authorization/sign_up', options)
        .then(res => res.json())
        .then(user => {
          this.setState({ user });
          console.log(this.state);
        }).catch(err => console.dir(err));
    } else {
      alert('Incorrect Password');
    }
  };

  render () {
    return (
      <form action={'POST'}
            onSubmit={this.submitHandler}
            className={styles.container}
      >
        <TextInput type="text"
                   isRequired={true}
                   onChange={this.handleInput}
                   value={this.state.signUpData.firstName}
                   placeholder={'name'}
                   name={'firstName'}
                   pattern={USER_NAME_PATTERN}
        />
        <TextInput type="text"
                   isRequired={true}
                   onChange={this.handleInput}
                   value={this.state.signUpData.lastName}
                   placeholder={'last name'}
                   name={'lastName'}
                   pattern={USER_NAME_PATTERN}
        />
        <TextInput type="email"
                   isRequired={true}
                   onChange={this.handleInput}
                   value={this.state.signUpData.email}
                   placeholder={'email'}
                   name={'email'}
                   pattern={EMAIL_PATTERN}
        />
        <TextInput type="password"
                   isRequired={true}
                   onChange={this.handleInput}
                   value={this.state.signUpData.password}
                   placeholder={'input password'}
                   name={'password'}
                   pattern={PASSWORD_PATTERN}
        />
        <TextInput type="password"
                   isRequired={true}
                   onChange={this.handleInput}
                   value={this.state.signUpData.passwordConfirm}
                   placeholder={'confirm password'}
                   name={'passwordConfirm'}
                   pattern={PASSWORD_PATTERN}
        />
        <TextInput type="submit" value="Submit"/>
      </form>
    );
  }
}

export default SignUpForm;