import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utlis/api';

const ActionType = {
  RECIEVE_THREADS: 'RECIEVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  TOGGLE_UPVOTE_THREAD: 'TOGGLE_UPVOTE_THREAD',
  TOGGLE_DOWNVOTE_THREAD: 'TOGGLE_DOWNVOTE_THREAD',
  TOGGLE_NEUTRALVOTE_THREAD: 'TOGGLE_NEUTRALVOTE_THREAD',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECIEVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}

function toggleUpvoteThreadActionCreator(userId, threadId) {
  return {
    type: ActionType.TOGGLE_UPVOTE_THREAD,
    payload: {
      userId,
      threadId,
    },
  };
}

function toggleDownvoteThreadActionCreator(userId, threadId) {
  return {
    type: ActionType.TOGGLE_DOWNVOTE_THREAD,
    payload: {
      userId,
      threadId,
    },
  };
}

function toggleNeutralvoteThreadActionCreator(userId, threadId) {
  return {
    type: ActionType.TOGGLE_NEUTRALVOTE_THREAD,
    payload: {
      userId,
      threadId,
    },
  };
}

function asyncAddThread({ title, body, category }) {
  return async (dispatch) => {
    dispatch(showLoading());
    const threadObj = { title, body, category };
    try {
      await api.createThread(threadObj);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToggleUpvoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleUpvoteThreadActionCreator(authUser.id, threadId));

    try {
      await api.upvoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleUpvoteThreadActionCreator(authUser.id, threadId));
    }
  };
}

function asyncToggleDownvoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleDownvoteThreadActionCreator(authUser.id, threadId));

    try {
      await api.downvoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleDownvoteThreadActionCreator(authUser.id, threadId));
    }
  };
}

function asyncToggleNeutralvoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleNeutralvoteThreadActionCreator(authUser.id, threadId));

    try {
      await api.neutralvoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleNeutralvoteThreadActionCreator(authUser.id, threadId));
    }
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  asyncAddThread,
  asyncToggleUpvoteThread,
  asyncToggleDownvoteThread,
  asyncToggleNeutralvoteThread,
};
