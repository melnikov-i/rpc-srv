import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer, IRootState } from '@src/redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

function confugureStore(initialState?: IRootState) {
  return createStore(
    rootReducer,
    initialState!,
    // composeWithDevTools(
      applyMiddleware(thunk),
    // ),
  );
}

const store = confugureStore();
export default store;
