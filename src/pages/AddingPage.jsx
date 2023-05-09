import React from 'react';
import ThreadInput from '../components/ThreadInput';
import { useDispatch } from 'react-redux';
import { asyncAddThread } from '../states/threads/action';
import { useNavigate } from 'react-router-dom';

function AddingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
    navigate('/');
  };

  return (
    <section className='adding-page'>
      <ThreadInput addThread={ onAddThread }/>
    </section>
  );
}

export default AddingPage;
