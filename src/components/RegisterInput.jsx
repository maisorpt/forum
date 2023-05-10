import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="register-input">
      <input
        type="text"
        placeholder="Nama"
        onChange={onNameChange}
        value={name}
      />
      <input
        type="text"
        placeholder="Email"
        onChange={onEmailChange}
        value={email}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={onPasswordChange}
        value={password}
      />
      <button type="button" onClick={() => register({ name, email, password })}>
        Register
      </button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
