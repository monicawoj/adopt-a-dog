import React from 'react';
import { withRouter } from 'react-router';

class NewPost extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const caption = this.refs.caption.value;
    this.props.addPost(caption);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="new-post">
        <h2>What's on your mind?</h2>
        <form ref="newPostForm" className="new-post-form" onSubmit={this.handleSubmit}>
          <input className="caption-input" type="text" ref="caption" placeholder="Some cheeky caption"/>
          <input className="button" type="submit" value="POST"/>
        </form>
      </div>
    )
  }
}

const Post = withRouter(NewPost);

export default Post;
