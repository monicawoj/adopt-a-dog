import React from 'react';
import { Link } from 'react-router';
import PhotoGrid from './PhotoGrid';

export default class SearchPage extends React.Component {
  render() {
    return (
      //need a form here where the user filters based on what kind of dog they want

      //need a submit button

      //need to call the API request upon submit
      //this.props.fetchDogs('http://jsonplaceholder.typicode.com/users');

      <PhotoGrid {...this.props} />
    )
  }
}
