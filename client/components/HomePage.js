import React from 'react';
import { Link } from 'react-router';
import PhotoGrid from './PhotoGrid';

export default class HomePage extends React.Component {
  componentWillMount() {
    this.props.getDogs();
  }

  render() {
    return (<div className="home">
      <PhotoGrid {...this.props} items={this.props.dogs}/>
      <div className="button-wrap">
        <button className="btn-primary button-show-more" onClick={e => this.props.getDogs()}>
          SHOW MORE
        </button>
      </div>
    </div>
    )
  }
}
