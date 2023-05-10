import React from 'react';
import PropTypes from 'prop-types';
import CommentItem, { commentShape } from './CommentItem';

function CommentList({
  comments = [],
  upvoteComment,
  downvoteComment,
  neutralvoteComment,
}) {
  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          {...comment}
          upvoteComment={upvoteComment}
          downvoteComment={downvoteComment}
          neutralvoteComment={neutralvoteComment}
        />
      ))}
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
  upvoteComment: PropTypes.func.isRequired,
  downvoteComment: PropTypes.func.isRequired,
  neutralvoteComment: PropTypes.func.isRequired,
};

export default CommentList;
