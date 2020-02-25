import { Field, reduxForm } from 'redux-form';
import React from 'react';
import RenderField from './renderField';
import PropTypes from 'prop-types';
import CheckBoxField from './checkBoxField';
import { required } from './validate';

const LoginForm = (props) => {
  const { handleSubmit, pristine, submitting, invalid } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          className="form-control"
          placeholder="Username"
          name="email"
          type="text"
          fa="fa fa-at"
          validate={[required]}
          component={RenderField}
        />
      </div>
      <div>
        <Field
          className="form-control"
          placeholder="******"
          name="password"
          type="password"
          fa="fa fa-key"
          validate={[required]}
          component={RenderField}
        />
      </div>
      <div className="text-left">
        <Field
          name="remember"
          component={CheckBoxField}
          type="checkbox"
          checkboxClass="icheckbox_square-green"
          increaseArea="20%"
          cursor="pointer"
          label="<span className='checkbox-label'> Remember Me </span>"
        />
      </div>
      <button type="submit"
        id="btnLogin"
        className="btn btn-primary block full-width m-b"
        disabled={pristine || submitting || invalid}>
                Login
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'login_form' // a unique identifier for this form
})(LoginForm);
