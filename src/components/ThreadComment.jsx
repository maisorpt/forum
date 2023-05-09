import React from 'react';
import PropTypes from 'prop-types';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

function ThreadComment({ comments, upvoteComment, downvoteComment, neutralvoteComment, addComment}) {
  return (
    <div className='thread-comment'>
      <CommentInput addComment={ addComment }/>
      <CommentList comments={ comments } upvoteComment={ upvoteComment } downvoteComment={ downvoteComment } neutralvoteComment={ neutralvoteComment } />
    </div>
  );
}

ThreadComment.propTypes = {
  upvoteComment: PropTypes.func.isRequired,
  downvoteComment: PropTypes.func.isRequired,
  neutralvoteComment: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ThreadComment;
