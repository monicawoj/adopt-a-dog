import React from 'react';
import { Link } from 'react-router';
import Photo from './Photo';
import Description from './Description';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import DeleteButton from './DeleteButton';

export default class Single extends React.Component {
  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    const id = this.props.params.id;
    let i = this.props.dogs.findIndex((dog) => dog.id['$t'] === id);
    let dog = this.props.dogs[i];
    if (i == -1) {
      i = this.props.favorites.findIndex((dog) => dog.id['$t'] === id);
      dog = this.props.favorites[i];
      console.log(dog);
    }

    const dogComments = this.props.comments[dog.id['$t']] ? this.props.comments[dog.id['$t']] : null;

    return <div className='container'>
      <div className='single-photo'>
        <Photo i={i} dog={dog} {...this.props}/>
      <Description dogComments={dogComments} dog={dog} i={i} {...this.props}/>
      </div>
      <button
        className="button"
        onClick={this.goBack}>
        <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
        &nbsp; Back
      </button>
      {/* <Link to={this.props.history.goBack} className='button'>

      </Link> */}
      {dog.favorite ? <DeleteButton {...this.props} i={i}/> : null}
    </div>

  }
}
