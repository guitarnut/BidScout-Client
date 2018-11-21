import {CAMPAIGNS, CREATIVES, LOGIN} from "../actions";

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      let login = { ...state, loggedIn: true, user: action.payload };
      persistState(login);
      return login;
    case CAMPAIGNS:
      let campaigns = { ...state, campaigns: action.payload };
      persistState(campaigns);
      return campaigns;
    case CREATIVES:
      let creatives = { ...state, creatives: action.payload };
      persistState(creatives);
      return creatives;
    default:
      return state;
  }
};

function persistState(data) {
  window.sessionStorage.setItem('state', JSON.stringify(data));
}

export default rootReducer;
