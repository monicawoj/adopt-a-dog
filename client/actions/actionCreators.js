import axios from 'axios';
import api from '../api';

//increment likes
export const increment = (id) => {
  console.log('dispatch increment likes')
  return {
    type: 'INCREMENT_LIKES',
    id
  }
}

//add post
export const addPost = (caption) => {
  console.log('dispatch add post');
  return {
    type: 'ADD_POST',
    caption
  }
}

//remove post
export const removePost = (postId) => {
  console.log('dispatch remove post');
  return {
    type: 'REMOVE_POST',
    postId
  }
}

//add comment
export const addComment = (postId, author, comment) => {
  console.log('dispatch add comment');
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

//remove comment
export const removeComment = (postId, index) => {
  console.log('removing a comment');
  return {
    type: 'REMOVE_COMMENT',
    postId,
    index
  }
}

export const fetchDogs = (data) => {
  return {
    type: 'FETCH_DOGS',
    data
  }
}

//fetch all dogs with thunk (allows us to return a function)
export const getDogs = () => {
  const request = api.dogs().getRandom(12);

  return (dispatch) => {
    request.then(({data}) => {
      const cleanData = JSON.parse(data.substring(2,data.length-2));
      dispatch(fetchDogs(cleanData.petfinder.pet))
    });
  }
}

//get all dogs that were "hearted" as favorites
export function getFavorites() {
  console.log('dispatch get favorites');
  //console.log(data);
  return {
    type: 'GET_FAVORITES'
  }
}

export function addToFavorites(data) {
  console.log('dispatch add to favorites');
  console.log(data);
  return {
    type: 'ADD_TO_FAVORITES',
    data
  }
}

//START HERE TOMORROW - FIND DOGS
// export const findDogs = (breed, size, sex, location, age) => {
//   const request = api.dogs().find(breed, size, sex, location, age);
//
//   return (dispatch) => {
//     request.then(({data}) => {
//       const cleanData = JSON.parse(data.substring(2,data.length-2));
//       dispatch(fetchDogs(cleanData.petfinder.pet))
//     });
//   }
// }
