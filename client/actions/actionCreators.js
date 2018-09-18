import axios from 'axios';
import api from '../api';

//mark as favorite to render red heart on home or search page
export const markAsFavorite = (i) => {
  console.log('dispatch mark as favorite')
  return {
    type: 'MARK_AS_FAVORITE',
    i
  }
}

//unmark from favorites
export const unMarkAsFavorite = (i) => {
  console.log('dispatch unmark as favorite')
  return {
    type: 'UNMARK_AS_FAVORITE',
    i
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
      dispatch(fetchDogs(data.petfinder.pet))
    });
  }
}

//full breed list from api
export const requestBreedList = () => {
  const request = api.dogs().breedList();
  console.log('request breed list');

  return (dispatch) => {
    request.then(({data}) => {
      const breeds = data.petfinder.breeds.breed.map(breed => breed['$t']);
      dispatch(getBreedList(breeds));
    });
  }
}

//dispatch breed list to store
export function getBreedList(data) {
  console.log('dispatch get breed list');
  return {
    type: 'GET_BREED_LIST',
    data
  }
}

//get all dogs that were "hearted" as favorites
export function getFavorites() {
  console.log('dispatch get favorites');
  return {
    type: 'GET_FAVORITES'
  }
}

export function addToFavorites(data) {
  console.log('dispatch add to favorites');
  return {
    type: 'ADD_TO_FAVORITES',
    data
  }
}

export function removeFromFavorites(id) {
  console.log('dispatch remove from favorites');
  return {
    type: 'REMOVE_FROM_FAVORITES',
    id
  }
}

export const handleFavoriteClick = (data,i) => {
  return (dispatch) => {
    //const i = data.id['$t'];
    dispatch(markAsFavorite(i));
    dispatch(addToFavorites(data));
  }
}

export const handleRemoveFavorite = (id,i) => {
  return (dispatch) => {
    //const i = data.id['$t'];
    dispatch(unMarkAsFavorite(i));
    dispatch(removeFromFavorites(id));
  }
}

//start the api request, dispatch the find dogs action
export const requestFindDogs = (breed, size, sex, location, age) => {
  const request = api.dogs().find(breed, size, sex, location, age);

  return (dispatch) => {
    request.then(({data}) => {
      dispatch(findDogs(data.petfinder.pet))
    });
  }
}

//find dogs
export const findDogs = (data) => {
  return {
    type: 'FIND_DOGS',
    data
  }
}
