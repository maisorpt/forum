import { ActionType } from "./action";

function commentReducer(detailThread = { comments: [] }, action = {}) {
  const comments = detailThread.comments || [];
  const comment = comments.find(comment => comment.id === action.payload.commentId);
  const isCommentUpvoted = comment && comment.upVotesBy.includes(action.payload.userId);
  const isCommentDownvoted = comment && comment.downVotesBy.includes(action.payload.userId);
  
  switch (action.type) {
    case ActionType.TOGGLE_UPVOTE_THREAD_COMMENT:
      return {
        ...detailThread,
        comments: detailThread.comments.map((comment) => {
          if (comment.id === action.payload.commentId ) {
            if (isCommentDownvoted) {
              return {
                ...comment,
                upVotesBy: isCommentUpvoted
                  ? comment.upVotesBy.filter((id) => id !== action.payload.userId)
                  : comment.upVotesBy.concat(action.payload.userId),
                downVotesBy: comment.downVotesBy.filter((id) => id !== action.payload.userId),
              };
            }
            return {
              ...comment,
              upVotesBy: isCommentUpvoted
                ? comment.upVotesBy.filter((id) => id !== action.payload.userId)
                : comment.upVotesBy.concat(action.payload.userId),
            };
          }
          return comment;
        })
      };
    case ActionType.TOGGLE_DOWNVOTE_THREAD_COMMENT:
      return {
        ...detailThread,
        comments: detailThread.comments.map((comment) => {
          if (comment.id === action.payload.commentId ) {
            if (isCommentUpvoted) {
              return {
                ...comment,
                downVotesBy: isCommentDownvoted
                  ? comment.downVotesBy.filter((id) => id !== action.payload.userId)
                  : comment.downVotesBy.concat(action.payload.userId),
                upVotesBy: comment.upVotesBy.filter((id) => id !== action.payload.userId),
              };
            }
            return {
              ...comment,
              downVotesBy: isCommentDownvoted
                ? comment.downVotesBy.filter((id) => id !== action.payload.userId)
                : comment.downVotesBy.concat(action.payload.userId),
            };
          }
          return comment;
        })
      };
    case ActionType.TOGGLE_NEUTRALVOTE_THREAD_COMMENT:
      return {
        ...detailThread,
        comments: detailThread.comments.map((comment) => {
          if (comment.id === action.payload.commentId ) {
            if (isCommentUpvoted) {
              return {
                ...comment,
                upVotesBy: comment.upVotesBy.filter((id) => id !== action.payload.userId),
              };
            } else if (isCommentDownvoted) {
              return {
                ...comment,
                downVotesBy: comment.downVotesBy.filter((id) => id !== action.payload.userId),
              };
            }
          }
          return comment;
        })
      };
    default:
      return detailThread;
  }
}

export default commentReducer;
