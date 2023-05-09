import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utlis/api';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

function asyncRegisterUser(user) {
  return async () => {
    showLoading();
    try {
      await api.register(user);
    } catch (error) {
      alert(error.message);
    }
    hideLoading();
  };
}

export {
  ActionType,
  receiveUsersActionCreator,
  asyncRegisterUser,
};
