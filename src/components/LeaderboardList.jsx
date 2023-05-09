import React from 'react';
import PropTypes from 'prop-types';
import LeaderboardItem from './LeaderboardItem';

function LeaderboardList({ leaderboards }) {
  return (
    <div>
      <header>
        <p className="leaderboards-list__user-label">Pengguna</p>
        <p className="leaderboards-list__score-label">Skor</p>
      </header>
      {
          leaderboards.map((leaderboard, index) => (
            <LeaderboardItem key={ index } { ...leaderboard}/>
          ))
        }
    </div>
  );
}

LeaderboardList.propTypes = {
  leaderboards: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
      score: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default LeaderboardList;
