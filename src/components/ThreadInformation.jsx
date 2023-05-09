import React from 'react';
import PropTypes from 'prop-types';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { postedAt } from '../utlis';
import { useSelector } from 'react-redux';

function ThreadInformation({ id, createdAt, ownerId, upVotesBy=[], downVotesBy=[], totalComments, upvote, downvote, neutralvote }) {
  const { users, authUser } = useSelector((state) => state);

  const isThreadUpvoted = authUser && upVotesBy.includes(authUser.id);
  const isThreadDownvoted = authUser && downVotesBy.includes(authUser.id);

  const onUpvoteClick = () => {
    if(!authUser){
      alert("harus login");
      return;
    }
    if(isThreadUpvoted) {
      neutralvote(id)
    } else {
      upvote(id)
    }
  };

  const onDownvoteClick = () => {
    if(!authUser){
      alert("harus login");
      return;
    }
    if(isThreadDownvoted) {
      neutralvote(id)
    } else {
      downvote(id)
    }
  };

  const user = users.find((user) => user.id === ownerId) || {};  

  return (
    <div className='thread-item__information'>
    {
      upVotesBy && (
        <div className='thread-item__votes'>
          <p>
            <button type='button' aria-label='vote' onClick={ () => onUpvoteClick() }>
              { isThreadUpvoted ? <FaThumbsUp style={{ color: 'red' }} /> : <FaThumbsUp />}
            </button>
            {' '}
            {upVotesBy.length}
          </p>
        </div>
      )
    }
    {
      downVotesBy && (
        <div className='thread-item__votes'>
          <p>
            <button type='button' aria-label='vote'  onClick={ () => onDownvoteClick() }>
              {  isThreadDownvoted ? <FaThumbsDown style={{ color: 'red' }} /> : <FaThumbsDown />}
            </button>
            {' '}
            {downVotesBy.length}
          </p>
        </div>
      )
    }
      <p className='thread-item__total-comment'>{ totalComments } REPLY</p>
      {
        user && user.name && (
          <>
          <p className='thread-item__creator'>Created by { user.name }</p>
          <p className='thread-item__created-date'>{ postedAt(createdAt) }</p>
          </>
        )
      }
    </div>
  );
}

const threadItemShape = {
  id: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
};

ThreadInformation.propTypes = {
    ...threadItemShape,
};

export default ThreadInformation;
