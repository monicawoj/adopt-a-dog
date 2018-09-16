import React from 'react';
import { Link } from 'react-router';
import Photo from './Photo';
import Comments from './Comments';

export default class Single extends React.Component {
  render() {
    const id = this.props.params.id;
    const i = this.props.dogs.findIndex((dog) => dog.id['$t'] === id); //loop over the dogs until the dog id is equal to the url id param
    const dog = this.props.dogs[i];
    const dogComments = this.props.comments[dog.id['$t']] ? this.props.comments[dog.id['$t']] : null;

    return <div className='single-photo'>
      <Photo i={i} dog={dog} {...this.props}/>
    <Comments dogComments={dogComments} {...this.props}/>
    </div>
  }
}
