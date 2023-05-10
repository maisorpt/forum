import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa';
import { postedAt } from '../utlis/index';

function CommentItem({
  id,
  content,
  createdAt,
  owner,
  upVotesBy = [],
  downVotesBy = [],
  upvoteComment,
  downvoteComment,
  neutralvoteComment,
}) {
  const { authUser } = useSelector((state) => state);

  const isCommentUpvoted = authUser && upVotesBy.includes(authUser.id);
  const isCommentDownvoted = authUser && downVotesBy.includes(authUser.id);

  const onUpvoteClick = () => {
    if (!authUser) {
      alert('harus login');
      return;
    }
    if (isCommentUpvoted) {
      neutralvoteComment(id);
    } else {
      upvoteComment(id);
    }
  };

  const onDownvoteClick = () => {
    if (!authUser) {
      alert('harus login');
      return;
    }
    if (isCommentDownvoted) {
      neutralvoteComment(id);
    } else {
      downvoteComment(id);
    }
  };

  const newContent = content.replace(/"/g, '');
  return (
    <div className="comment-item">
      <header className="comment-item__header">
        <div className="comment-item__user-info">
          <img src={owner.avatar} alt={owner.name} />
          <p className="commment-item__user-name">{owner.name}</p>
        </div>
        <p className="comment-item__posted-at">{postedAt(createdAt)}</p>
      </header>
      <article>
        <p
          className="thread-comment__content"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: newContent }}
        />
      </article>
      <footer>
        {upVotesBy && (
          <button
            type="button"
            className="comment-upvote__button"
            aria-label="vote"
            onClick={() => onUpvoteClick()}
          >
            {isCommentUpvoted ? (
              <FaThumbsUp style={{ color: 'red' }} />
            ) : (
              <FaThumbsUp />
            )}
            <span className="comment-upvote__label">{upVotesBy.length}</span>
          </button>
        )}
        {downVotesBy && (
          <button
            type="button"
            className="comment-downvote__button"
            aria-label="vote"
            onClick={() => onDownvoteClick()}
          >
            {isCommentDownvoted ? (
              <FaThumbsDown style={{ color: 'red' }} />
            ) : (
              <FaThumbsDown />
            )}
            <span className="comment-downvote__label">
              {downVotesBy.length}
            </span>
          </button>
        )}
      </footer>
    </div>
  );
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

CommentItem.propTypes = {
  ...commentShape,
};

export { commentShape };

export default CommentItem;
