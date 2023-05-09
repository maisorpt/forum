import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function CommentInput({ addComment }) {
  const { authUser } = useSelector((state) => state);
  const [comment, setComment] = useState('');

  function onCommentChange(event) {
    setComment(event.target.value);
  }

  const onComment = () => {
    if (!authUser) {
      alert('harus login');
      return;
    }
    addComment({ comment });
    setComment('');
  };

  return (
    <form className="comment-input">
      <textarea className="comment-input__field" onChange={onCommentChange} placeholder="tulis komentar" value={comment} />
      <button type="button" onClick={onComment}>Kirim</button>
    </form>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default CommentInput;
