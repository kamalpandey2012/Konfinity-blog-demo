import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActions from '../../actions/postActions';


class PostsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      post: {
        title: ''
      }
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onSaveClicked = this.onSaveClicked.bind(this);
  }
  onTitleChange(event) {
    const post = this.state.post;
    post.title = event.target.value;
    this.setState({ post: post });
  }
  onSaveClicked() {
    this.props.actions.createPost(this.state.post);
  }
  postRow(post, index) {
    return <div key={index}>{post.title}</div>;
  }
  render() {
    return (
      <div className="container-fluid">
        <h1>Posts</h1>
        <input type="text"
          value={this.state.post.title}
          onChange={this.onTitleChange} />
        <input type="submit"
          value="Save"
          onClick={this.onSaveClicked} />
        {this.props.posts.map(this.postRow)}
      </div>
    );
  }
}

PostsPage.propTypes = {
  posts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
