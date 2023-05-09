import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import commentReducer from './comment/reducer';
import isPreloadReducer from './isPreload/reducer';
import threadDetailReducer from './threadDetail/reducer';
import threadsReducer from './threads/reducer';
import usersReducer from './users/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    comment: commentReducer,
    isPreload: isPreloadReducer,
    detailThread: threadDetailReducer,
    threads: threadsReducer,
    users: usersReducer,
    loading: loadingBarReducer,
  },
});

export default store;
