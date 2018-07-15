import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from 'qredux/rootReducer';
import rootEpic from 'qredux/rootEpic';

const epicMiddleware = createEpicMiddleware();

export const initStore = (initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(epicMiddleware),
    ),
  );

  epicMiddleware.run(rootEpic);

  return store;
};

export default initStore;
