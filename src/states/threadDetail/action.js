import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utlis/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  TOGGLE_UPVOTE_THREAD_DETAIL: 'TOGGLE_UPVOTE_THREAD_DETAIL',
  TOGGLE_DOWNVOTE_THREAD_DETAIL: 'TOGGLE_DOWNVOTE_THREAD_DETAIL',
  TOGGLE_NEUTRALVOTE_THREAD_DETAIL: 'TOGGLE_NEUTRALVOTE_THREAD_DETAIL',
  TOGGLE_UPVOTE_THREAD_COMMENT: 'TOGGLE_UPVOTE_THREAD_COMMENT',
  TOGGLE_DOWNVOTE_THREAD_COMMENT: 'TOGGLE_DOWNVOTE_THREAD_COMMENT',
  TOGGLE_NEUTRALVOTE_THREAD_COMMENT: 'TOGGLE_NEUTRALVOTE_THREAD_COMMENT',
  ADD_COMMENT: 'ADD_COMMENT',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function toggleUpvoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.TOGGLE_UPVOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function toggleDownvoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.TOGGLE_DOWNVOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function toggleNeutralvoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.TOGGLE_NEUTRALVOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function toggleUpvoteThreadCommentActionCreator(userId, commentId) {
  return {
    type: ActionType.TOGGLE_UPVOTE_THREAD_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}

function toggleDownvoteThreadCommentActionCreator(userId, commentId) {
  return {
    type: ActionType.TOGGLE_DOWNVOTE_THREAD_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}

function toggleNeutralvoteThreadCommentActionCreator(userId, commentId) {
  return {
    type: ActionType.TOGGLE_NEUTRALVOTE_THREAD_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}

function addCommentActionCreator({ comment }) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const threadDetail = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToggleUpvoteThreadDetail() {
  return async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    dispatch(toggleUpvoteThreadDetailActionCreator(authUser.id));

    try {
      await api.upvoteThread(detailThread.id);
    } catch (error) {
      alert(error.message);
      dispatch(toggleUpvoteThreadDetailActionCreator(authUser.id));
    }
  };
}

function asyncToggleDownvoteThreadDetail() {
  return async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    dispatch(toggleDownvoteThreadDetailActionCreator(authUser.id));

    try {
      await api.downvoteThread(detailThread.id);
    } catch (error) {
      alert(error.message);
      dispatch(toggleDownvoteThreadDetailActionCreator(authUser.id));
    }
  };
}

function asyncToggleNeutralvoteThreadDetail() {
  return async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    dispatch(toggleNeutralvoteThreadDetailActionCreator(authUser.id));

    try {
      await api.neutralvoteThread(detailThread.id);
    } catch (error) {
      alert(error.message);
      dispatch(toggleNeutralvoteThreadDetailActionCreator(authUser.id));
    }
  };
}

function asyncToggleUpvoteThreadComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    dispatch(toggleUpvoteThreadCommentActionCreator(authUser.id, commentId));

    try {
      await api.upvoteComment(detailThread.id, commentId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleUpvoteThreadCommentActionCreator(authUser.id, commentId));
    }
  };
}

function asyncToggleDownvoteThreadComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    dispatch(toggleDownvoteThreadCommentActionCreator(authUser.id, commentId));

    try {
      await api.downvoteComment(detailThread.id, commentId);
    } catch (error) {
      alert(error.message);
      dispatch(
        toggleDownvoteThreadCommentActionCreator(authUser.id, commentId),
      );
    }
  };
}

function asyncToggleNeutralvoteThreadComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    dispatch(
      toggleNeutralvoteThreadCommentActionCreator(authUser.id, commentId),
    );

    try {
      await api.neutralvoteComment(detailThread.id, commentId);
    } catch (error) {
      alert(error.message);
      dispatch(
        toggleNeutralvoteThreadCommentActionCreator(authUser.id, commentId),
      );
    }
  };
}

function asyncAddComment({ comment }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { detailThread } = getState();
    const commentObj = { content: comment };
    try {
      const newComment = await api.createComment(commentObj, detailThread.id);
      dispatch(addCommentActionCreator({ comment: newComment }));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  toggleUpvoteThreadDetailActionCreator,
  toggleDownvoteThreadDetailActionCreator,
  toggleNeutralvoteThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  asyncToggleUpvoteThreadDetail,
  asyncToggleDownvoteThreadDetail,
  asyncToggleNeutralvoteThreadDetail,
  toggleUpvoteThreadCommentActionCreator,
  toggleDownvoteThreadCommentActionCreator,
  toggleNeutralvoteThreadCommentActionCreator,
  asyncToggleUpvoteThreadComment,
  asyncToggleDownvoteThreadComment,
  asyncToggleNeutralvoteThreadComment,
  asyncAddComment,
};
