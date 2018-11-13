import {LOGIN} from "../actions";

const initialState = {
  login: {
    username: '',
    loggedIn: false,
  }
};

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      let result = { ...state, login: action.payload };
      persistState(result);
      return result;
    default:
      return state;
  }
};

function persistState(data) {
  window.sessionStorage.setItem('state', JSON.stringify(data));
}

export default rootReducer;
