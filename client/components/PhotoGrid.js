import React from 'react';
import { Link } from 'react-router';
import Photo from './Photo';
import AddBlock from './AddBlock';
import api from '../api';

export default class PhotoGrid extends React.Component {

  render() {
      return <div className='photo-grid'>
        {this.props.items.map((dog,i) => <Photo {...this.props} key={i} i={i} dog={dog} />)}
      </div>
  }
}
