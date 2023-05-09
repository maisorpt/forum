import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ThreadDetail from '../components/ThreadDetail';
import { useDispatch, useSelector } from 'react-redux';
import { asyncAddComment, asyncReceiveThreadDetail, asyncToggleDownvoteThreadComment, asyncToggleDownvoteThreadDetail, asyncToggleNeutralvoteThreadComment, asyncToggleNeutralvoteThreadDetail, asyncToggleUpvoteThreadComment, asyncToggleUpvoteThreadDetail } from '../states/threadDetail/action';

function DetailPage() {
  const { id } = useParams();
  const {
    detailThread = null,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  },[id, dispatch]);

  const onUpvoteThread = () => {
    dispatch(asyncToggleUpvoteThreadDetail());
  }

  const onNeutralvoteThread = () => {
    dispatch(asyncToggleNeutralvoteThreadDetail());
  }

  const onDownvoteThread = () => {
    dispatch(asyncToggleDownvoteThreadDetail());
  }

  const onUpvoteComment = (commentId) => {
    dispatch(asyncToggleUpvoteThreadComment(commentId));
  }

  const onDownvoteComment = (commentId) => {
    dispatch(asyncToggleDownvoteThreadComment(commentId));
  }

  const onNeutralvoteComment = (commentId) => {
    dispatch(asyncToggleNeutralvoteThreadComment(commentId));
  }

  const onAddComment = ({comment}) => {
    dispatch(asyncAddComment({comment}));
  };
  
  if (!detailThread) {
    return null;
  }

  return (
    <section className='detail-page'>
      <ThreadDetail { ...detailThread } upvote={ onUpvoteThread } downvote={ onDownvoteThread }  neutralvote={ onNeutralvoteThread} upvoteComment={ onUpvoteComment } downvoteComment={ onDownvoteComment } neutralvoteComment={ onNeutralvoteComment } addComment={ onAddComment }/>
    </section>
  );
}

export default DetailPage;
