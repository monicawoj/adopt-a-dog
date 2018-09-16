import React from 'react';
import { Link } from 'react-router';
import PhotoGrid from './PhotoGrid';

export default class HomePage extends React.Component {
  componentWillMount() {
    this.props.getDogs();
  }

  render() {
    console.log(this.props.favorites, this.props.dogs);
    return (
      <PhotoGrid {...this.props} items={this.props.dogs}/>
    )
  }
}
