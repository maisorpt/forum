import React from 'react';
import RegisterInput from '../components/RegisterInput';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({name, email, password}) => {
    dispatch(asyncRegisterUser({ name, email ,password}));
    navigate('/');
  };
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
    </section>
  );
}

export default RegisterPage;
