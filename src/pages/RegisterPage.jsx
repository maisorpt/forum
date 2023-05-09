import React from 'react';
import RegisterInput from '../components/RegisterInput';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../states/users/action';
import { FaHome } from 'react-icons/fa';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({name, email, password}) => {
    dispatch(asyncRegisterUser({ name, email ,password}));
    navigate('/');
  };

  const goToHome = () => {
    navigate('/' )
  }

  return (
    <section className='register-page'>
      <article>
        <RegisterInput register={ onRegister }/>
        <p>
          Already have an account?
          {' '}
          <Link to="/">Login</Link>
        </p>
      </article>
      <button className='new-thread-button__home' onClick={ goToHome }><FaHome/></button>
    </section>
  );
}

export default RegisterPage;
