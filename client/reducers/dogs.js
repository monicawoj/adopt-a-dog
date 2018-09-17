//reducer takes two parameters 1-action, 2-copy of current state
//and returns new state
import { faker } from 'faker';

const dogs = (state=[], action) => {
  const i = action.i;
  switch (action.type) {
    case 'MARK_AS_FAVORITE':
      state = [
        ...state.slice(0,i),
        {...state[i], 'favorite':true},
        ...state.slice(i+1)
      ];
      return state;
    case 'UNMARK_AS_FAVORITE':
      state = [
        ...state.slice(0,i),
        {...state[i], 'favorite':false},
        ...state.slice(i+1)
      ];
      return state;
    case 'FETCH_DOGS':
      const data = action.data;
      const newItemsForState = data.map(item => {
        return {
          ...item,
          'favorite':false
        }
      });
      state = [
        ...state,
        ...newItemsForState
      ];
      return state;
    default:
      return state;
  }
}

export default dogs;
