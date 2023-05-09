import React, { useEffect } from 'react';
import LeaderboardList from '../components/LeaderboardList';
import { useDispatch, useSelector } from 'react-redux';
import { asyncLeaderboards } from '../states/leaderboards/action';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

function LeaderboardsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { leaderboards } = useSelector((state) => state);

  useEffect(() => {
    dispatch(asyncLeaderboards());
  }, [dispatch]);

  const goToHome = () => {
    navigate('/' )
  }

  return (
    <div className='leaderboards-page'>
      <LeaderboardList leaderboards={ leaderboards }/>
      <button className='new-thread-button__home' onClick={ goToHome }><FaHome/></button>
    </div>
  )
}

export default LeaderboardsPage;
