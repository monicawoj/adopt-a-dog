import React from 'react';
import { Link, withRouter } from 'react-router';

class Description extends React.Component {
  renderComment = (comment,i) => {
    const {id} = this.props.params;
    return (
      <div className='comment' key={i}>
        <p>
          {comment.text}
          <button className='remove-comment' onClick={e => this.props.removeComment(id,i)}>
            &times;
          </button>
        </p>
      </div>
    )
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {id} = this.props.params;
    const comment = this.refs.comment.value;
    this.props.addComment(id,comment);
    this.refs.commentForm.reset();
  }

  render() {
    const {i, dog} = this.props
    return (
      <div className="description-wrap">
        <h3><strong>ABOUT {dog.name['$t'].toUpperCase()}</strong></h3>
        <p><strong>Age:</strong> {dog.age['$t']}</p>
        <p><strong>Sex:</strong> {dog.sex['$t']}</p>
        <p><strong>Size:</strong> {dog.size['$t']}</p>
        <p><strong>Breed:</strong> {dog.breeds.breed['$t']} (Mix? {dog.mix['$t']})</p>
        <p><strong>Description:</strong> {dog.description['$t']}</p>
        <p><strong>CONTACT INFO:</strong></p>
        <p><strong>Phone: </strong>{dog.contact.phone['$t']}</p>
        <p>
          <strong>Email: </strong>
          <a href={`mailto:${dog.contact.email['$t']}`}>{dog.contact.email['$t']}</a>
        </p>
        <p><strong>Address: </strong> {dog.contact.city['$t']}, {dog.contact.state['$t']}, {dog.contact.zip['$t']}</p>
        <p><strong>MY THOUGHTS:</strong></p>
        <div className="comments">
          { this.props.dogComments ? this.props.dogComments.map(this.renderComment) : null }
          <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
            <input type="text" ref="comment" placeholder="Add a comment"/>
            <input type="submit" hidden />
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(Description);
