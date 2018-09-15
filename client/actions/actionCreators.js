//increment likes
export const increment = (index) => {
  return {
    type: 'INCREMENT_LIKES',
    index
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
