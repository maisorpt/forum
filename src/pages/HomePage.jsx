import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaChartBar, FaPlusCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ThreadList from '../components/ThreadList';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import {
  asyncToggleDownvoteThread,
  asyncToggleNeutralvoteThread,
  asyncToggleUpvoteThread,
} from '../states/threads/action';

function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { threads } = useSelector((state) => state);

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onUpvoteThread = (threadId) => {
    dispatch(asyncToggleUpvoteThread(threadId));
  };

  const onNeutralvoteThread = (threadId) => {
    dispatch(asyncToggleNeutralvoteThread(threadId));
  };

  const onDownvoteThread = (threadId) => {
    dispatch(asyncToggleDownvoteThread(threadId));
  };

  const goToCreate = () => {
    navigate('/create');
  };

  const goToLeaderBoards = () => {
    navigate('/leaderboards');
  };

  return (
    <div>
      <ThreadList
        threads={threads}
        upvote={onUpvoteThread}
        downvote={onDownvoteThread}
        neutralvote={onNeutralvoteThread}
      />
      <button type="button" className="new-thread-button__create" onClick={goToCreate}>
        <FaPlusCircle />
      </button>
      <button
        type="button"
        className="new-thread-button__leaderboards"
        onClick={goToLeaderBoards}
      >
        <FaChartBar />
      </button>
    </div>
  );
}

export default HomePage;
