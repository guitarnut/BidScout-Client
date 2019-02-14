import {createStore} from "redux";
import rootReducer from "./reducers/index";

const defaultEmptyState = {
  loggedIn: false,
  user: {},
  campaigns: {},
  creatives: {}
};

const initialState = window.sessionStorage.getItem('state') != null ?
  JSON.parse(window.sessionStorage.getItem('state')) : defaultEmptyState;

const store = createStore(rootReducer, initialState);

export default store;
