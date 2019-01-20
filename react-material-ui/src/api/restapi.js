import axios from "axios/index";

export const sessionTimeout = 1000 * 60 * 60;
// export const host = 'https://app.auctionscout.net'; //process.env.REACT_APP_HOST;
export const host = 'http://localhost:8080'; //process.env.REACT_APP_HOST;

let session = null;

let username = '';
let password = '';
let userid = '';

function generateAuthPostHeaders(noAuth) {
  if (username === '' || password === '') {
    username = window.sessionStorage.getItem('username');
    password = window.sessionStorage.getItem('password');
  }

  let headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, HEAD, POST, PUT, DELETE, TRACE, OPTIONS, PATCH",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
    'Content-Type': 'application/json'
  };

  if (!noAuth) {
    headers['Authorization'] = 'Basic ' + btoa(username + ':' + password);
  }

  return headers;
}

function handleError(e) {
    window.location.pathname = '/error';
    //return;

  // switch (e.response.status) {
  //   case 401:
  //     window.location.pathname = '/login';
  //     break;
  //   default:
  //     window.location.pathname = '/error';
  //     break;
  // }
}

function resetSession() {
  if (session !== undefined) {
    clearTimeout(session);
  }

  session = setTimeout(() => {
    logout();
  }, sessionTimeout);
}

function postRequest(path, data, noAuth) {
  resetSession();

  let postData = data === undefined ? {} : data;
  noAuth = noAuth !== undefined ? noAuth : false;

  return new Promise((resolve, reject) => {
    axios.post(path, postData, {headers: generateAuthPostHeaders(noAuth)})
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        handleError(error);
      });
  });
}

export function loginUser(u, p) {
  return new Promise((resolve, reject) => {
    username = u;
    password = p;
    axios.post(host + '/user/login', {username: u}, {headers: generateAuthPostHeaders()})
      .then(function (response) {
        resetSession();
        window.sessionStorage.setItem('username', username);
        window.sessionStorage.setItem('password', password);
        window.sessionStorage.setItem('userid', response.data.id);
        username = u;
        password = p;
        userid = response.id;
        resolve(response.data);
      })
      .catch(function (error) {
        console.log(error);
        reject();
      });
  })
}

export function logout() {
  username = '';
  password = '';
  userid = '';
  window.sessionStorage.removeItem('username');
  window.sessionStorage.removeItem('password');
  window.sessionStorage.removeItem('userid');
}

export function getUserId() {
  return window.sessionStorage.getItem('userid');
}

export function viewBid(id) {
  return postRequest(host + '/api/bid/' + window.sessionStorage.getItem('userid') + '/' + id);
}

export function getAllBids() {
  return postRequest(host + '/api/bid/all/' + window.sessionStorage.getItem('userid'));
}

export function deleteBid(id) {
  return postRequest(host + '/api/bid/delete/' + window.sessionStorage.getItem('userid') + '/' + id);
}

export function deleteAllBids() {
  return postRequest(host + '/api/bid/deleteall/' + window.sessionStorage.getItem('userid'));
}

export function viewBidErrors() {
  return postRequest(host + '/api/biderrors/' + window.sessionStorage.getItem('userid'));
}

export function viewImpressions(id) {
  return postRequest(host + '/api/impressions/' + window.sessionStorage.getItem('userid') + '/' + id);
}

export function viewClicks(id) {
  return postRequest(host + '/api/clicks/' + window.sessionStorage.getItem('userid') + '/' + id);
}

export function saveCreative(json) {
  return postRequest(host + '/api/creative/create/' + window.sessionStorage.getItem('userid'), json);
}

export function deleteCreative(id) {
  return postRequest(host + '/api/creative/delete/' + window.sessionStorage.getItem('userid') + '/' + id);
}

export function saveCampaign(json) {
  return postRequest(host + '/api/campaign/create/' + window.sessionStorage.getItem('userid'), json);
}

export function deleteCampaign(id) {
  return postRequest(host + '/api/campaign/delete/' + window.sessionStorage.getItem('userid') + '/' + id);
}

export function getCampaignNames() {
  return postRequest(host + '/api/campaign/all/' + window.sessionStorage.getItem('userid'));
}

export function getCampaign(id) {
  return postRequest(host + '/api/campaign/get/' + window.sessionStorage.getItem('userid') + '/' + id);
}

export function getCampaignWithCreative(id) {
  return postRequest(host + '/api/campaign/getby/' + window.sessionStorage.getItem('userid') + '/creative/' + id);
}

export function getCreative(id) {
  return postRequest(host + '/api/creative/get/' + window.sessionStorage.getItem('userid') + '/' + id);
}

export function getCreativeNames() {
  return postRequest(host + '/api/creative/all/' + window.sessionStorage.getItem('userid'));
}

export function getCreativeNamesByCampaign(id) {
  return postRequest(host + '/api/creative/all/' + window.sessionStorage.getItem('userid') + '/' + id);
}

export function resetCreative(id) {
  return postRequest(host + '/api/creative/reset/' + window.sessionStorage.getItem('userid') + '/' + id);
}

export function resetCampaign(id) {
  return postRequest(host + '/api/campaign/reset/' + window.sessionStorage.getItem('userid') + '/' + id);
}

export function saveXML(json) {
  return postRequest(host + '/api/xml/create/' + window.sessionStorage.getItem('userid'), json);
}

export function getAllXml() {
  return postRequest(host + '/api/xml/all/' + window.sessionStorage.getItem('userid'));
}

export function getXml(id) {
  return postRequest(host + '/api/xml/get/' + window.sessionStorage.getItem('userid') + '/' + id);
}

export function getVast(id) {
  return postRequest(host + '/vast/view/' + window.sessionStorage.getItem('userid') + '/' + id);
}

export function getVastRequestRecords() {
  return postRequest(host + '/api/vast/all/' + window.sessionStorage.getItem('userid'));
}

export function getVastRequestByTagRequestId(id) {
  return postRequest(host + '/api/vast/get/' + window.sessionStorage.getItem('userid') + '/' + id);
}

export function getVastRequestEventsByTagRequestId(id) {
  return postRequest(host + '/api/vast/events/get/' + window.sessionStorage.getItem('userid') + '/' + id);
}

export function deleteXml(id) {
  return postRequest(host + '/api/xml/delete/' + window.sessionStorage.getItem('userid') + '/' + id);
}

export function addCreativeToCampaign(campaignId, creativeId) {
  return postRequest(host + '/api/campaign/add/creative/' + window.sessionStorage.getItem('userid') + '/' + campaignId + '/' + creativeId);
}

export function removeCreativeFromCampaign(campaignId, creativeId) {
  return postRequest(host + '/api/campaign/remove/creative/' + window.sessionStorage.getItem('userid') + '/' + campaignId + '/' + creativeId);
}

export function getUser() {
  return postRequest(host + '/user/account/get/' + window.sessionStorage.getItem('userid'));
}

export function updateUser(json) {
  return postRequest(host + '/user/account/update/' + window.sessionStorage.getItem('userid'), json);
}

export function createUser(json) {
  return postRequest(host + '/user/create', json, true);
}
