import { ActionTypes } from '../actions/actionTypes';

const initialState = {
  count: 0,
};

const createReducer = (initialState, handlers) => {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
};

export const reducer = createReducer(initialState, {
  [ActionTypes.COUNT_UP](state, action) {
    return {
      ...state,
      'count': state.count + 1
    }
  }
});
