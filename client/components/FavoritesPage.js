import React from 'react';
import { Link } from 'react-router';
import PhotoGrid from './PhotoGrid';

export default class FavoritesPage extends React.Component {
  // componentWillMount() {
  //   //console.log(this.props.favorites);
  //   this.props.getFavorites(this.props.favorites);
  // }
  componentWillMount() {
    this.props.getFavorites();
  }

  render() {
    console.log(this.props);
    return (
      <PhotoGrid {...this.props} items={this.props.favorites} />
    )
  }
}
