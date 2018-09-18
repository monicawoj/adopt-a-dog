//reducer takes two parameters 1-action, 2-copy of current state
//and returns new state
import { faker } from 'faker';

const dogs = (state=[], action) => {
  switch (action.type) {
    case 'MARK_AS_FAVORITE':
      const i = action.i;
      state = [
        ...state.slice(0,i),
        {...state[i], 'favorite':true},
        ...state.slice(i+1)
      ];
      return state;
    case 'UNMARK_AS_FAVORITE':
      state = [
        ...state.slice(0,action.i),
        {...state[action.i], 'favorite':false},
        ...state.slice(action.i+1)
      ];
      return state;
    case 'FETCH_DOGS':
      const newDogs = action.data.map(item => {
        return {
          ...item,
          'favorite':false
        }
      });
      state = [
        ...state,
        ...newDogs
      ];
      return state;
    case 'FIND_DOGS':
      console.log(action);
      const foundDogs = action.data.map(item => {
        return {
          ...item,
          'favorite':false
        }
      });
      state = [
        ...foundDogs
      ];
      return state;
    default:
      return state;
  }
}

export default dogs;
