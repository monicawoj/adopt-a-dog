import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import dogs from './dogs';
import comments from './comments';
import favorites from './favorites';

const rootReducer = combineReducers({
  dogs,
  comments,
  favorites,
  routing: routerReducer
});

export default rootReducer;
