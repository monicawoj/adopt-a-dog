import React from 'react';
import { withRouter } from 'react-router';

class Comments extends React.Component {
  renderComment = (comment,i) => {
    const {postId} = this.props.params;
    return (
      <div className='comment' key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className='remove-comment' onClick={e => this.props.removeComment(postId,i)}>
            &times;
          </button>
        </p>
      </div>
    )
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {postId} = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    // console.log(this.refs) //everything we put refs on, we can grab
    this.props.addComment(postId,author,comment);
    this.refs.commentForm.reset();
  }

  handleDeleteClick = (e) => {
    this.props.removePost(this.props.params.postId);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="comments-wrap">
        <div className="comments">
          { this.props.postComments ? this.props.postComments.map(this.renderComment) : null }
          <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
            <input type="text" ref="author" placeholder="author"/>
            <input type="text" ref="comment" placeholder="comment"/>
            <input type="submit" hidden />
          </form>
        </div>
        <button className="delete-button" onClick={this.handleDeleteClick}>
          DELETE
        </button>
      </div>
    )
  }
}

export default withRouter(Comments);
