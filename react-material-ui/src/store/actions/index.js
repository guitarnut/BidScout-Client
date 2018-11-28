export const LOGIN = 'LOGIN';
export const CREATIVES = 'CREATIVES';
export const CAMPAIGNS = 'CAMPAIGNS';
export const XML = 'XML';

export const storeLoginUser = data => (
  {
    type: LOGIN, payload: data
  }
);

export const storeAllCreatives = data => (
  {
    type: CREATIVES, payload: data
  }
);

export const storeAllCampaigns = data => (
  {
    type: CAMPAIGNS, payload: data
  }
);

export const storeAllXml = data => (
  {
    type: XML, payload: data
  }
);
