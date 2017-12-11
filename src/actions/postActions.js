import * as types from './actionTypes';

export function createPost(post) {
  return { type: types.CREATE_POST, post };
}
