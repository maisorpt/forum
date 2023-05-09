import React from 'react';
import LoginInput from '../components/LoginInput';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../states/authUser/action';
import { FaHome } from 'react-icons/fa';

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
    navigate(`/`);
  };

  const goToHome = () => {
    navigate('/' )
  }

  return (
    <section className='login-page'>
      <LoginInput login={onLogin}/>
      <p>
        Don&apos;t have an account?
        {' '}
        <Link to="/register">Register</Link>
      </p>
      <button className='new-thread-button__home' onClick={ goToHome }><FaHome/></button>
    </section>
  );
}

export default LoginPage;