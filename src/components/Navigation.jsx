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
  }

  return (
    <div className='navigation'>
      <Link to={'/'}>
        <p>Connect - Social Platform</p>
      </Link>
      <div className='navigation_profile'>
        <img src={avatar} alt={name} />
        <p>Hello, {name}</p>
        <Link to={authUser ? '/' : '/login'} onClick={onSignOut}>
          {authUser ? 'Sign Out' : 'Login'}
        </Link>
      </div>
    </div>
  );
}

const authUserShape = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape),
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
