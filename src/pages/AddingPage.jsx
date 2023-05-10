import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { asyncAddThread } from '../states/threads/action';
import ThreadInput from '../components/ThreadInput';

function AddingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authUser } = useSelector((state) => state);

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
    navigate('/');
  };

  const goToHome = () => {
    navigate('/');
  };

  if (!authUser) {
    return (
      <>
        <p>Must be logged in</p>
        <button type="button" className="new-thread-button__home" onClick={goToHome}>
          <FaHome />
        </button>
      </>
    );
  }

  return (
    <section className="adding-page">
      <ThreadInput addThread={onAddThread} />
      <button type="button" className="new-thread-button__home" onClick={goToHome}>
        <FaHome />
      </button>
    </section>
  );
}

export default AddingPage;
