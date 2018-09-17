import React from 'react';
import { Link, withRouter } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import DeleteButton from './DeleteButton';

class Comments extends React.Component {
  renderComment = (comment,i) => {
    const {id} = this.props.params;
    return (
      <div className='comment' key={i}>
        <p>
          <strong>My Notes:</strong>
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
    const {i} = this.props;
    return (
      <div className="comments-wrap">
        <div className="comments">
          { this.props.dogComments ? this.props.dogComments.map(this.renderComment) : null }
          <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
            <input type="text" ref="comment" placeholder="Add notes"/>
            <input type="submit" hidden />
          </form>
        </div>
        <Link to={this.props.history.goBack} className='button'>
          <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
          &nbsp; Back
        </Link>
        {this.props.dogs[i].favorite ? <DeleteButton {...this.props} i={i}/> : null}
      </div>
    )
  }
}

export default withRouter(Comments);
