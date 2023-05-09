import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ThreadList from '../components/ThreadList';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { asyncToggleDownvoteThread, asyncToggleNeutralvoteThread, asyncToggleUpvoteThread } from '../states/threads/action';

function HomePage() {
  const dispatch = useDispatch();
  const { threads } = useSelector((state) => state);

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onUpvoteThread = (threadId) => {
    dispatch(asyncToggleUpvoteThread(threadId));
  }

  const onNeutralvoteThread = (threadId) => {
    dispatch(asyncToggleNeutralvoteThread(threadId));
  }

  const onDownvoteThread = (threadId) => {
    dispatch(asyncToggleDownvoteThread(threadId));
  }

  return (
    <div>
      <ThreadList threads={ threads }  upvote={ onUpvoteThread } downvote={ onDownvoteThread } neutralvote={ onNeutralvoteThread }/>
    </div>
  );
}


export default HomePage;
