import React, { Component } from 'react';
import { Checkbox } from 'react-icheck';
import PropTypes from 'prop-types';

class CheckBoxField extends Component {
  onCheck(e, checked) {
    this.props.input.onChange(checked);
  }
  render() {
    return <Checkbox
      name={this.props.input.name}
      checkboxClass={this.props.checkboxClass}
      increaseArea={this.props.increaseArea}
      checked={this.props.input.checked}
      onChange={this.onCheck.bind(this)}
      cursor={this.props.cursor}
      label={this.props.label}
    />;
  }
}

CheckBoxField.propTypes = {
  input: PropTypes.object.isRequired,
  checkboxClass: PropTypes.string.isRequired,
  increaseArea: PropTypes.string.isRequired,
  cursor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default CheckBoxField;
