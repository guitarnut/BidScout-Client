import axios from "axios/index";

const host = 'http://localhost:8080';
let username = '';
let password = '';
let userid = '';

function generateAuthPostHeaders() {
  if (username === '' || password === '') {
    username = window.sessionStorage.getItem('username');
    password = window.sessionStorage.getItem('password');
  }

  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, HEAD, POST, PUT, DELETE, TRACE, OPTIONS, PATCH",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + btoa(username + ':' + password)
  }
}

function handleError(e) {
  if (!e.hasOwnProperty('response') || !e.response.hasOwnProperty('status')) {
    window.location.pathname = '/error';
    return;
  }
  switch (e.response.status) {
    case 401:
      window.location.pathname = '/login';
      break;
    default:
      window.location.pathname = '/error';
      break;
  }
}

function postRequest(path, data) {
  let postData = data === undefined ? {} : data;
  return new Promise((resolve, reject) => {
    axios.post(path, postData, {headers: generateAuthPostHeaders()})
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        console.log(error);
        //handleError(error);
      });
  });
}

export function loginUser(u, p) {
  return new Promise((resolve, reject) => {
    username = u;
    password = p;
    axios.post(host + '/user/login', {username: 'admin'}, {headers: generateAuthPostHeaders()})
      .then(function (response) {
        console.log(response);
        window.sessionStorage.setItem('username', username);
        window.sessionStorage.setItem('password', password);
        window.sessionStorage.setItem('userid', response.data.id);
        userid = response.id;
        //resolve(response);
      })
      .catch(function (error) {
        console.log(error);
        console.log("Error occurred while logging in");
        //resolve(error);
      });
  })
}

export function logout() {
  username = '';
  password = '';
  window.sessionStorage.removeItem(username);
  window.sessionStorage.removeItem(password);
}

export function viewBid(id) {
  return postRequest(host + '/api/bid/' + id);
}

export function saveCreative(json) {
  return postRequest(host + '/api/creative/create', json);
}

export function saveCampaign(json) {
  return postRequest(host + '/api/campaign/create', json);
}

export function getCampaignNames() {
  return postRequest(host + '/api/campaign/all');
}

export function getCampaign(id) {
  return postRequest(host + '/api/campaign/get/' + id);
}

export function getCampaignWithCreative(id) {
  return postRequest(host + '/api/campaign/getby/creative/' + id);
}

export function getCreative(id) {
  return postRequest(host + '/api/creative/get/' + id);
}

export function getCreativeNames() {
  return postRequest(host + '/api/creative/all');
}

export function getCreativeNamesByCampaign(id) {
  return postRequest(host + '/api/creative/all/' + id);
}

export function getUser() {
  return postRequest(host + '/user/get/' + window.sessionStorage.getItem('userid'));
}
