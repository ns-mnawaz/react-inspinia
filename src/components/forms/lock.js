import { Field, reduxForm } from 'redux-form';
import React from 'react';
import RenderField from './renderField';
import PropTypes from 'prop-types';
import { get } from 'lodash';

const validate = (values) => {
  const errors = {};
  if (!values.password) {
    errors.password = 'Required';
  }
  else if (values.password.length < 3) {
    errors.password = 'Must be 3 characters or more';
  }

  return errors;
};

const warn = (values) => {
  const warnings = {};
  if (get(values, 'password.length', '') > 15) {
    warnings.password = 'Hmm, you have a very strong password ...';
  }
  return warnings;
};

const LockForm = (props) => {
  const { handleSubmit, pristine, submitting, invalid } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          className="form-control"
          placeholder="******"
          name="password"
          type="password"
          fa="fa fa-key"
          component={RenderField}
        />
      </div>
      <button type="submit"
        className="btn btn-primary block full-width"
        disabled={pristine || submitting || invalid}>
                Unlock
      </button>
    </form>
  );
};

LockForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'lock_form', // a unique identifier for this form
  validate,
  warn
})(LockForm);
