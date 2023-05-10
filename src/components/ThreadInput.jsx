import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function ThreadInput({ addThread }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useInput('');

  return (
    <form className="thread-input">
      <input
        className="thread-input__tittle"
        type="text"
        placeholder="title"
        onChange={onTitleChange}
        value={title}
      />
      <input
        className="thread-input__category"
        type="text"
        placeholder="category"
        onChange={onCategoryChange}
        value={category}
      />
      <textarea
        className="thread-__body"
        placeholder="body"
        onChange={onBodyChange}
        value={body}
      />
      <button
        type="button"
        onClick={() => addThread({ title, body, category })}
      >
        Buat
      </button>
    </form>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
