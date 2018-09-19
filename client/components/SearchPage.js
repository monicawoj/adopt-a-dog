import React from 'react';
import { Route, Link } from 'react-router';
import PhotoGrid from './PhotoGrid';
import SearchForm from './SearchForm';
import NoSearchResults from './NoSearchResults';

export default class SearchPage extends React.Component {
  constructor(props, {match}) {
    super(props, {match});
  }

  render() {
    return (
      <div>
        <SearchForm {...this.props} />
        {
          this.props.dogs.length > 0 ? <PhotoGrid {...this.props} items={this.props.dogs} /> : <NoSearchResults/>
        }
      </div>
    )
  }
}
