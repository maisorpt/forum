import { useSelector } from 'react-redux';

function useThreadVotes(id) {
  const { authUser, users, detailThread, threads } = useSelector((state) => state);

  let thread = detailThread || {};
  if (!thread.id) {
    thread = threads.find((thread) => thread.id === id) || {};
  }

  const user = users.find((user) => user.id === thread.ownerId) || {};

  const isUpvoted = thread.upVotesBy && thread.upVotesBy.includes(authUser.id);
  const isDownvoted = thread.downVotesBy && thread.downVotesBy.includes(authUser.id);


  return {
    user,
    isUpvoted,
    isDownvoted,
  };
}

export default useThreadVotes;
