import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import HomePage from './components/home/homePage';
import AboutPage from './components/about/aboutPage';
import PostsPage from './components/posts/PostsPage';
import AddPostPage from './components/posts/AddPostPage';
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/posts" component={PostsPage} />
    <Route path="/add-post" component={AddPostPage} />
  </Route>
);
