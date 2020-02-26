import React, { Component } from 'react';

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
      console.log(data);
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
    }
    console.log('passwordIncorrent');
  };

  render () {
    return (
      <form action={'POST'}
            onSubmit={this.submitHandler}
            style={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '380px',
              textAlign: 'center',
            }}
      >
        <input type="text"
               onChange={this.handleInput}
               value={this.state.signUpData.firstName}
               placeholder={'name'}
               name={'firstName'}
        />
        <input type="text"
               onChange={this.handleInput}
               value={this.state.signUpData.lastName}
               placeholder={'last name'}
               name={'lastName'}
        />
        <input type="email"
               onChange={this.handleInput}
               value={this.state.signUpData.email}
               placeholder={'email'}
               name={'email'}
        />
        <input type="password"
               onChange={this.handleInput}
               value={this.state.signUpData.password}
               placeholder={'input password'}
               name={'password'}
        />
        <input type="password"
               onChange={this.handleInput}
               value={this.state.signUpData.passwordConfirm}
               placeholder={'confirm password'}
               name={'passwordConfirm'}
        />
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default SignUpForm;