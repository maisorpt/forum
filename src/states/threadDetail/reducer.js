import { ActionType  } from './action';

function threadDetailReducer(threadDetail = [], action = {}) {

  switch(action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail;
    case ActionType.CLEAR_THREAD_DETAIL:
      return null;
    case ActionType.TOGGLE_UPVOTE_THREAD_DETAIL:
      var isUpvoted = threadDetail.upVotesBy && threadDetail.upVotesBy.includes(action.payload.userId);
      var isDownvoted = threadDetail.downVotesBy && threadDetail.downVotesBy.includes(action.payload.userId);
      if (isDownvoted) {
        return {
          ...threadDetail,
          upVotesBy: isUpvoted
          ? threadDetail.upVotesBy.filter((id) => id !== action.payload.userId)
          : threadDetail.upVotesBy.concat(action.payload.userId),
          downVotesBy: threadDetail.downVotesBy.filter((id) => id !== action.payload.userId),
        };
      }
      return {
        ...threadDetail,
        upVotesBy: isUpvoted
        ? threadDetail.upVotesBy.filter((id) => id !== action.payload.userId)
        : threadDetail.upVotesBy.concat(action.payload.userId),
      };
    case ActionType.TOGGLE_DOWNVOTE_THREAD_DETAIL:
      if (isUpvoted) {
        return {
          ...threadDetail,
          downVotesBy: isDownvoted
          ? threadDetail.downVotesBy.filter((id) => id !== action.payload.userId)
          : threadDetail.downVotesBy.concat(action.payload.userId),
          upVotesBy: threadDetail.upVotesBy.filter((id) => id !== action.payload.userId),
        };
      }
      return {
        ...threadDetail,
        downVotesBy: isDownvoted
        ? threadDetail.downVotesBy.filter((id) => id !== action.payload.userId)
        : threadDetail.downVotesBy.concat(action.payload.userId),
      };
    case ActionType.TOGGLE_NEUTRALVOTE_THREAD_DETAIL:
      if (isUpvoted) {
        return {
          ...threadDetail,
          upVotesBy: threadDetail.upVotesBy.filter((id) => id !== action.payload.userId),
        };
      } else if (isDownvoted) {
        return {
          ...threadDetail,
          downVotesBy: threadDetail.downVotesBy.filter((id) => id !== action.payload.userId),
        };
      }
      break;
    case ActionType.TOGGLE_UPVOTE_THREAD_COMMENT:
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            const isCommentUpvoted = comment.upVotesBy && comment.upVotesBy.includes(action.payload.userId);
            const isCommentDownvoted = comment.downVotesBy && comment.downVotesBy.includes(action.payload.userId);

            if (isCommentDownvoted) {
              return {
                ...comment,
                upVotesBy: isCommentUpvoted
                  ? comment.upVotesBy.filter((id) => id !== action.payload.userId)
                  : [...comment.upVotesBy, action.payload.userId],
                downVotesBy: comment.downVotesBy.filter((id) => id !== action.payload.userId),
              };
            }
            return {
              ...comment,
              upVotesBy: isCommentUpvoted
                ? comment.upVotesBy.filter((id) => id !== action.payload.userId)
                : [...comment.upVotesBy, action.payload.userId],
            };
          }
          return comment;
        }),
      };
    case ActionType.TOGGLE_DOWNVOTE_THREAD_COMMENT:
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            const isCommentUpvoted = comment.upVotesBy && comment.upVotesBy.includes(action.payload.userId);
            const isCommentDownvoted = comment.downVotesBy && comment.downVotesBy.includes(action.payload.userId);

            if (isCommentUpvoted) {
              return {
                ...comment,
                downVotesBy: isCommentDownvoted
                  ? comment.downVotesBy.filter((id) => id !== action.payload.userId)
                  : [...comment.downVotesBy, action.payload.userId],
                upVotesBy: comment.upVotesBy.filter((id) => id !== action.payload.userId),
              };
            }
            return {
              ...comment,
              downVotesBy: isCommentDownvoted
                ? comment.downVotesBy.filter((id) => id !== action.payload.userId)
                : [...comment.downVotesBy, action.payload.userId],
            };
          }
          return comment;
        }),
      };
    case ActionType.TOGGLE_NEUTRALVOTE_THREAD_COMMENT:
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            const isCommentUpvoted = comment.upVotesBy && comment.upVotesBy.includes(action.payload.userId);
            const isCommentDownvoted = comment.downVotesBy && comment.downVotesBy.includes(action.payload.userId);

            if (isCommentUpvoted) {
              return {
                ...comment,
                upVotesBy: comment.upVotesBy.filter((id) => id !== action.payload.userId),
              };
            }  else if (isCommentDownvoted) {
              return {
                ...comment,
                downVotesBy: comment.downVotesBy.filter((id) => id !== action.payload.userId),
              };
            } 
          }
          return comment;
        }),
      };
    case ActionType.ADD_COMMENT:
        return {
          ...threadDetail,
          comments: [action.payload.comment, ...threadDetail.comments],
        };    
    default:
      return threadDetail;
  }
}

export default threadDetailReducer;
