import React from 'react';
import { Link } from 'react-router';
import PhotoGrid from './PhotoGrid';
import SearchForm from './SearchForm';

export default class SearchPage extends React.Component {
  componentWillMount() {
    this.props.requestBreedList();
  }

  render() {
    return (
      //need a form here where the user filters based on what kind of dog they want

      //need a submit button

      //need to call the API request upon submit
      //this.props.fetchDogs('http://jsonplaceholder.typicode.com/users');

      // <PhotoGrid {...this.props} items={this.props.dogs} />
      <SearchForm {...this.props} />
    )
  }
}
