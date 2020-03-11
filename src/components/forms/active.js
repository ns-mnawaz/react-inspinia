import { Field, reduxForm } from 'redux-form';
import React from 'react';
import RenderField from './renderField';
import PropTypes from 'prop-types';
import { required, email } from './validate';

const ActivateForm = (props) => {
  const { handleSubmit, pristine, submitting, invalid } = props;
  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit"
        id="btnActivate"
        className="btn btn-primary block full-width m-b"
        disabled={pristine || submitting || invalid}>
                Activate
      </button>
    </form>
  );
};

ActivateForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'activate_form' // a unique identifier for this form
})(ActivateForm);
