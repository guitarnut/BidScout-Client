import axios from "axios/index";

const host = 'http://localhost:8080';
let username = '';
let password = '';
function generateAuthPostHeaders() {
  if(username ==='' || password === '') {
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
const postHeaders = generateAuthPostHeaders();

export function loginUser(u, p) {
  console.log('foo');

  return new Promise((resolve, reject)=>{
    username = u;
    password = p;
    axios.post(host + '/user/login', {username: 'admin'}, {headers: generateAuthPostHeaders()})
      .then(function (response) {
        window.sessionStorage.setItem('username', username);
        window.sessionStorage.setItem('password', password);
        resolve(response);
      })
      .catch(function (error) {
        console.log("Error occurred while logging in");
        resolve(error);
      });
  })
}

export function logout() {
  username = '';
  password = '';
  window.sessionStorage.removeItem(username);
}

export function saveCreative(json) {
  axios.post(host + '/api/creative/create', json, {headers: generateAuthPostHeaders()})
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log("Error occurred while saving creative");
      return error;
    });
}

export function saveCampaign(json) {
  axios.post(host + '/api/campaign/create', json, {headers: generateAuthPostHeaders()})
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log("Error occurred while saving campaign");
      return error;
    });
}

export function getCampaign(id) {
  return new Promise((resolve, reject) => {
    axios.post(host + '/api/campaign/get/' + id, {}, {headers: generateAuthPostHeaders()})
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        console.log("Error occurred while getting campaign");
        reject(error);
      });
  })
}

export function getCreative(id) {
  return new Promise((resolve, reject) => {
    axios.post(host + '/api/creative/get/' + id, {}, {headers: generateAuthPostHeaders()})
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        console.log("Error occurred while getting creative");
        reject(error);
      });
  })
}
