import { combineReducers } from 'redux';

export type State = {
  readonly test: string,
};

export const reducer = combineReducers({
  test: ( state = '', action ) => {
    switch ( action.type ) {
      default:
        return state;
    }
  },
});
