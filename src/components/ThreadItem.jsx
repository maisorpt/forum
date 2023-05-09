import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import ThreadInformation from './ThreadInformation';

function ThreadItem({id, title, body, category, createdAt, ownerId, upVotesBy, downVotesBy, totalComments, upvote, downvote, neutralvote }) {
  const navigate = useNavigate();

  const onThreadClick = () => {
    navigate(`/thread/${id}`);
  };

  const newBody = body.replace(/"/g, '');

  return (
    <div className='thread-item'  role="button" >
        <header tabIndex={0}>
          <h2 className='thread-item__tittle' onClick={ onThreadClick }>{ title }</h2>
          <h4 className='thread-item__catergory'>#{ category }</h4>
        </header>
        <article>
          <p className='thread-item__body' dangerouslySetInnerHTML={{__html: newBody}} />
        </article>
        <ThreadInformation id={ id } createdAt={ createdAt } ownerId={ ownerId } upVotesBy={ upVotesBy } downVotesBy={ downVotesBy } totalComments={ totalComments } upvote={ upvote } downvote={ downvote } neutralvote={ neutralvote }/>
    </div>
  )
}

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComment: PropTypes.number,
};

ThreadItem.propTypes = {
  ...threadItemShape,
  upvote: PropTypes.func.isRequired,
  downvote: PropTypes.func.isRequired,
  neutralvote: PropTypes.func.isRequired,
};

export { threadItemShape };

export default ThreadItem;
