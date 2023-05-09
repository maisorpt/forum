import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className='login-input'>
      <input type='text' placeholder='Email' onChange={ onEmailChange } value={ email }/>
      <input type='password' placeholder='Password' onChange={ onPasswordChange } value={ password }/>
      <button type='button' onClick={() => login({ email, password })}>Login</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
