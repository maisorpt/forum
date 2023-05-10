import React from 'react';
import PropTypes from 'prop-types';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

function ThreadComment({
  comments,
  upvoteComment,
  downvoteComment,
  neutralvoteComment,
  addComment,
}) {
  return (
    <div className="thread-comment">
      <CommentInput addComment={addComment} />
      <CommentList
        comments={comments}
        upvoteComment={upvoteComment}
        downvoteComment={downvoteComment}
        neutralvoteComment={neutralvoteComment}
      />
    </div>
  );
}

ThreadComment.propTypes = {
  upvoteComment: PropTypes.func.isRequired,
  downvoteComment: PropTypes.func.isRequired,
  neutralvoteComment: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ThreadComment;
