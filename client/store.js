import {createStore, compose, applyMiddleware} from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';

//import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import dogs from './data/dogs';
import favorites from './data/favorites';
import breeds from './data/breeds';
import { loadState, saveState } from './localStorage.js';

const persistedState = loadState();

const defaultState = {
  dogs,
  comments,
  favorites,
  breeds
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk), enhancers);

// const store = createStore(rootReducer, persistedState, applyMiddleware(thunk), enhancers);
//
// store.subscribe(throttle(() => {
//   saveState({
//     favorites: store.getState().favorites
//   });
// },1000));

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  })
}

export default store;
