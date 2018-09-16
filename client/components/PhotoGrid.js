import React from 'react';
import { Link } from 'react-router';
import Photo from './Photo';
import AddBlock from './AddBlock';
import api from '../api';

export default class PhotoGrid extends React.Component {
  // componentWillMount() {
  //   console.log(this.props.favorites);
  // }

  render() {
    //console.log(this.props);
    //if (this.props.page == 'fav') {
      //console.log('rendering favorites')
      return <div className='photo-grid'>
        {this.props.items.map((dog,i) => <Photo {...this.props} key={i} i={i} dog={dog} />)}
      </div>
    //}
    // console.log('rendering dogs');
    // return <div className='photo-grid'>
    //   {this.props.dogs.map((dog,i) => <Photo {...this.props} key={i} i={i} dog={dog} />)}
    // </div>
  }
}
