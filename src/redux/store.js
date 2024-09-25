import {
  combineReducers,
  compose,
  legacy_createStore
} from "redux";

import listReducer from './listReducer';
import addReducer from "./addReducer";

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
  return legacy_createStore(
    combineReducers({
      list: listReducer,
      add: addReducer,
    }),
    undefined,
    compose(
      ReactReduxDevTools,
    )
  );
}

export default configureStore;