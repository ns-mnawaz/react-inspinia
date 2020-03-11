import { Field, reduxForm } from 'redux-form';
import React from 'react';
import RenderField from './renderField';
import PropTypes from 'prop-types';
import CheckBoxField from './checkBoxField';
import { required, alphaNumeric, phoneNumber, email } from './validate';

const RegisterForm = (props) => {
  const { handleSubmit, pristine, submitting, invalid } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          className="form-control"
          placeholder="Name"
          name="name"
          type="text"
          fa="fa fa-user"
          validate={[required, alphaNumeric]}
          component={RenderField}
        />
      </div>
      <div>
        <Field
          className="form-control"
          placeholder="Phone"
          name="phone"
          type="text"
          fa="fa fa-phone"
          validate={[required, phoneNumber]}
          component={RenderField}
        />
      </div>
      <div>
        <Field
          className="form-control"
          placeholder="Email"
          name="email"
          type="text"
          fa="fa fa-at"
          validate={[required, email]}
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
          name="agree_policy"
          component={CheckBoxField}
          type="checkbox"
          checkboxClass="icheckbox_square-green agree-policy"
          increaseArea="20%"
          cursor="pointer"
          label="<span className='checkbox-label'> Agree Policy </span>"
        />
      </div>
      <button type="submit"
        id="register_button"
        className="btn btn-primary block full-width m-b"
        disabled={pristine || submitting || invalid}>
                Register
      </button>
    </form>
  );
};

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'register_form' // a unique identifier for this form
})(RegisterForm);
