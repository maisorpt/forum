import React from 'react';
import PropTypes from 'prop-types';

function LeaderboardItem({user, score}) {
  return (
    <div className="leaderboard-item">
    <div className="leaderboard-item__user-info">
      <img src={ user.avatar } alt={ user.name } />
      <p>{ user.name }</p>
    </div>
    <p className="leaderboard-item__score">{ score }</p>
  </div>
  )
}

LeaderboardItem.propTypes = {
    user: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    score: PropTypes.number.isRequired,
  };

export default LeaderboardItem;
