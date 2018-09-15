import React from 'react';
import { Link } from 'react-router';
import Photo from './Photo';
import AddBlock from './AddBlock';

export default class PhotoGrid extends React.Component {
  render() {
    return (
      <div className='photo-grid'>
        {this.props.posts.map((post,i) => <Photo {...this.props} key={i} i={i} post={post} />)}
        <AddBlock/>
      </div>
    )
  }
}
