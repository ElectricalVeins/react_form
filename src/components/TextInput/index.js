import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './TextInput.module.css';

class TextInput extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isValid: null
    };
  }

  handleChange = e => {

    console.log('enter');

    if (this.props.pattern) {

      this.setState({
                      isValid: this.props.pattern.test(e.target.value)
                    });
    } else if (this.props.onChange) {
      this.props.onChange(e);
    }

  };

/*  validateHandler = (value, pattern) => {
    const result = value.match(pattern);
    return result === value;
  };*/

  render () {
    return (
      <input type="text"
             onChange={this.handleChange}
             className={this.state.isValid
                        ? classNames(styles.ValidInput)
                        : classNames(styles.InvalidInput)}
             {...this.props}

      />
    );
  }

}

export default TextInput;
