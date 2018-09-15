import React from 'react';
import { Link } from 'react-router';
import Photo from './Photo';
import Comments from './Comments';

export default class Single extends React.Component {
  render() {
    //index of the post
    //get us the post
    const postId = this.props.params.postId;
    const i = this.props.posts.findIndex((post) => post.code === postId); //loop over the posts until the index is equal to the url param
    const post = this.props.posts[i];
    const postComments = this.props.comments[post.code] ? this.props.comments[post.code] : null;

    return <div className='single-photo'>
      <Photo i={i} post={post} {...this.props}/>
    <Comments postComments={postComments} {...this.props}/>
    </div>
  }
}
