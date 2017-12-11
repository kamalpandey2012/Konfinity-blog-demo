import React from 'react';

export default class PostsPage extends React.Component {
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
    alert(`The title changed to: ${this.state.post.title}`);
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
      </div>
    );
  }
}
