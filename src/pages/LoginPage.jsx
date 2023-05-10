/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaHome } from 'react-icons/fa';
import { asyncSetAuthUser } from '../states/authUser/action';
import LoginInput from '../components/LoginInput';

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
    navigate('/');
  };

  const goToHome = () => {
    navigate('/');
  };

  return (
    <section className="login-page">
      <LoginInput login={onLogin} />
      <p>
        Don&apos;t have an account?
        {' '}
        <Link to="/register">Register</Link>
      </p>
      <button type="button" className="new-thread-button__home" onClick={goToHome}><FaHome /></button>
    </section>
  );
}

export default LoginPage;
