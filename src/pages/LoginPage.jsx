import React from 'react';
import LoginInput from '../components/LoginInput';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
    navigate(`/`);
  };

  return (
    <section className='login-page'>
      <LoginInput login={onLogin}/>
      <p>
        Don&apos;t have an account?
        {' '}
        <Link to="/register">Register</Link>
      </p>
    </section>
  );
}

export default LoginPage;