import React from 'react';
import { Link } from 'react-router';
import Photo from './Photo';
import Comments from './Comments';

export default class Single extends React.Component {
  render() {
    const id = this.props.params.id;
    const i = this.props.dogs.findIndex((dog) => dog.id['$t'] === id);
    const dog = this.props.dogs[i];
    console.log(dog);
    const dogComments = this.props.comments[dog.id['$t']] ? this.props.comments[dog.id['$t']] : null;

    return <div className='single-photo'>
      <Photo i={i} dog={dog} {...this.props}/>
    <Comments dogComments={dogComments} i={i} {...this.props}/>
    </div>
  }
}
