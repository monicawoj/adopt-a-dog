import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import dogs from './dogs';
import comments from './comments';
import favorites from './favorites';
import breeds from './breeds';

const rootReducer = combineReducers({
  dogs,
  comments,
  favorites,
  breeds,
  routing: routerReducer
});

export default rootReducer;
