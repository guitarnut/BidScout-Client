import {CAMPAIGNS, CREATIVES, LOGIN, LOGOUT, XML} from "../actions";

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      let login = { ...state, loggedIn: true, user: action.payload };
      persistState(login);
      return login;
    case LOGOUT:
      let logout = { ...state, loggedIn: false, user: {} };
      persistState(logout);
      return logout;
    case CAMPAIGNS:
      let campaigns = { ...state, campaigns: action.payload };
      persistState(campaigns);
      return campaigns;
    case CREATIVES:
      let creatives = { ...state, creatives: action.payload };
      persistState(creatives);
      return creatives;
    case XML:
      let xml = { ...state, xml: action.payload };
      persistState(xml);
      return xml;
    default:
      return state;
  }
};

function persistState(data) {
  window.sessionStorage.setItem('state', JSON.stringify(data));
}

export default rootReducer;
