import React from 'react';
import PropTypes from 'prop-types';

const renderField = ({ input, label, placeholder, type, fa, meta: { touched, error, warning } }) => {
  return (<div>
    {!!label && (<label>{label}</label>)}
    <div className="form-group input-group m-b">
      {!!fa && (
        <span className="input-group-addon"><i className={fa}/></span>
      )}
      <input className="form-control" {...input} placeholder={placeholder} type={type}/>
    </div>
    {touched && (
      (error &&
              <span className="error"> {error} </span>
      ) || (warning &&
              <span className="warn"> {warning} </span>
      )
    )}
  </div>);
};

renderField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  fa: PropTypes.string,
  type: PropTypes.string.isRequired
};

export default renderField;
