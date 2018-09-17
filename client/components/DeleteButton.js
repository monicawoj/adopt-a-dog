import React from 'react';

export default class DeleteButton extends React.Component {
  handleDeleteClick = (e) => {
    this.props.handleRemoveFavorite(this.props.params.id,this.props.i);
    this.props.history.goBack;
  }

  render() {
    return <button className="delete-button" onClick={this.handleDeleteClick}>
      Remove from favorites
    </button>
  }
}
