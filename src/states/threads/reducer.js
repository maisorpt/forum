import { ActionType } from './action';

function threadsReducer(threads=[], action={}) {
  switch (action.type) {
    case ActionType.RECIEVE_THREADS:
      return action.payload.threads;
    case ActionType.TOGGLE_UPVOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          const isUpvoted = thread.upVotesBy && thread.upVotesBy.includes(action.payload.userId);
          const isDownvoted = thread.downVotesBy && thread.downVotesBy.includes(action.payload.userId);
          if (isDownvoted) {
            return {
              ...thread,
              upVotesBy: isUpvoted
                ? thread.upVotesBy.filter((id) => id !== action.payload.userId)
                : thread.upVotesBy.concat(action.payload.userId),
              downVotesBy: thread.downVotesBy.filter((id) => id !== action.payload.userId),
            };
          }
          return {
            ...thread,
            upVotesBy: isUpvoted
              ? thread.upVotesBy.filter((id) => id !== action.payload.userId)
              : thread.upVotesBy.concat(action.payload.userId),
          };
        }
        return thread;
      });
    case ActionType.TOGGLE_DOWNVOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          const isUpvoted = thread.upVotesBy && thread.upVotesBy.includes(action.payload.userId);
          const isDownvoted = thread.downVotesBy && thread.downVotesBy.includes(action.payload.userId);
          if (isUpvoted) {
            return {
              ...thread,
              downVotesBy: isDownvoted
              ? thread.downVotesBy.filter((id) => id !== action.payload.userId)
              : thread.downVotesBy.concat(action.payload.userId),
              upVotesBy: thread.upVotesBy.filter((id) => id !== action.payload.userId),
            };
          }
          return {
            ...thread,
            downVotesBy: isDownvoted
            ? thread.downVotesBy.filter((id) => id !== action.payload.userId)
            : thread.downVotesBy.concat(action.payload.userId),
          };
        }
        return thread;
      });
    case ActionType.TOGGLE_NEUTRALVOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          const isUpvoted = thread.upVotesBy && thread.upVotesBy.includes(action.payload.userId);
          const isDownvoted = thread.downVotesBy && thread.downVotesBy.includes(action.payload.userId);
          if (isUpvoted) {
            return {
              ...thread,
              upVotesBy: thread.upVotesBy.filter((id) => id !== action.payload.userId),
            };
          } else if (isDownvoted) {
            return {
              ...thread,
              downVotesBy: thread.downVotesBy.filter((id) => id !== action.payload.userId),
            };
          }
        }
        return thread;
      });
    default:
    return threads;
  }
}

export default threadsReducer;
