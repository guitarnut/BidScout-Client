import axios from "axios/index";

const host = 'http://localhost:8080';
const postHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  'Content-Type': 'application/json'
};

export function saveCreative(json) {
  axios.post(host + '/api/creative/create', json, {headers: postHeaders})
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log("Error occurred while saving creative");
      return error;
    });
}

export function saveCampaign(json) {
  axios.post(host + '/api/campaign/create', json, {headers: postHeaders})
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
    axios.post(host + '/api/campaign/get/' + id, {}, {headers: postHeaders})
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
    axios.post(host + '/api/creative/get/' + id, {}, {headers: postHeaders})
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        console.log("Error occurred while getting campaign");
        reject(error);
      });
  })
}
