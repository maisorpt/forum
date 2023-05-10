/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navigation({ authUser, signOut }) {
  let avatar = 'user.png';
  let name = 'User';

  if (authUser) {
    avatar = authUser.avatar;
    name = authUser.name;
  }

  const onSignOut = () => {
    if (authUser) {
      signOut();
    }
  };

  return (
    <div className="navigation">
      <p>Connect - Social Platform</p>
      <div className="navigation_profile">
        <img src={avatar} alt={name} />
        <p>
          Hello,
          {name}
        </p>
        <Link to={authUser ? '/' : '/login'} onClick={onSignOut}>
          {authUser ? 'Sign Out' : 'Login'}
        </Link>
      </div>
    </div>
  );
}

Navigation.propTypes = {
  authUser: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
  }),
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
