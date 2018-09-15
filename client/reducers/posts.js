//reducer takes two parameters 1-action, 2-copy of current state
//and returns new state
import { faker } from 'faker';

const posts = (state=[], action) => {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      const i = action.index;
      state = [
        ...state.slice(0,i), //everything before updated one
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i+1)
      ];
      return state;
    case 'ADD_POST':
      const caption = action.caption;
      state = [
        ...state,
        {
          "code": (Math.floor(Math.random() * (+10000000 - +1000000)) + +1000000).toString(),
          "caption": caption,
          "likes": 0,
          "id": Math.floor(Math.random()),
          "display_src": `https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`,
        }
      ];
      return state;
    case 'REMOVE_POST':
      const postId = action.postId;
      return state.filter(item => item.code !== postId);
    default:
      return state;
  }
}

export default posts;
