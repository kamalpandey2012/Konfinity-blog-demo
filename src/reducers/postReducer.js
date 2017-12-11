import * as types from '../actions/actionTypes';

export default function postReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_POST:
      return [...state, Object.assign({}, action.post)];
    default:
      return state;
  }
}
