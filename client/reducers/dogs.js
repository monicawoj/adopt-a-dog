//reducer takes two parameters 1-action, 2-copy of current state
//and returns new state
import { faker } from 'faker';

const dogs = (state=[], action) => {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      const id = action.id;
      const itemToUpdate = state.filter(item => item.id['$t'] == id);
      state = [
        ...state,
        {...itemToUpdate, likes: itemToUpdate.likes + 1}
      ];
      return state;
    case 'FETCH_DOGS':
      const data = action.data;
      console.log(data);
      const newItemsForState = data;
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
