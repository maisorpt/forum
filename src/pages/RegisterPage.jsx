/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaHome } from 'react-icons/fa';
import { asyncRegisterUser } from '../states/users/action';
import RegisterInput from '../components/RegisterInput';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/');
  };

  const goToHome = () => {
    navigate('/');
  };

  return (
    <section className="register-page">
      <article>
        <RegisterInput register={onRegister} />
        <p>
          Already have an account?
          {' '}
          <Link to="/">Login</Link>
        </p>
      </article>
      <button type="button" className="new-thread-button__home" onClick={goToHome}><FaHome /></button>
    </section>
  );
}

export default RegisterPage;
