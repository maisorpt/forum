import api from '../../utlis/api';

const ActionType = {
  TOGGLE_UPVOTE_THREAD_COMMENT: 'TOGGLE_UPVOTE_THREAD_COMMENT',
  TOGGLE_DOWNVOTE_THREAD_COMMENT: 'TOGGLE_DOWNVOTE_THREAD_COMMENT',
  TOGGLE_NEUTRALVOTE_THREAD_COMMENT: 'TOGGLE_NEUTRALVOTE_THREAD_COMMENT',
};

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

function asyncToggleUpvoteThreadComment(threadId, commentId) {
    return async (dispatch, getState) => {
      const { authUser } = getState();
      dispatch(toggleUpvoteThreadCommentActionCreator(authUser.id, commentId));
    
      try {
        await api.addVoteComment(threadId, commentId);
      } catch (error) {
        alert(error.message);
      }
    };
  }

function asyncToggleDownvoteThreadComment(threadId, commentId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleDownvoteThreadCommentActionCreator(authUser.id, commentId));
    
    try {
      await api.upvoteComment(threadId, commentId);
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncToggleNeutralvoteThreadComment(threadId, commentId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleNeutralvoteThreadCommentActionCreator(authUser.id, commentId));
    
    try {
      await api.downvoteComment(threadId, commentId);
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  toggleUpvoteThreadCommentActionCreator,
  toggleDownvoteThreadCommentActionCreator,
  toggleNeutralvoteThreadCommentActionCreator,
  asyncToggleUpvoteThreadComment,
  asyncToggleDownvoteThreadComment,
  asyncToggleNeutralvoteThreadComment,
};