export const LOGIN = 'LOGIN';

export const storeLoginUser = data => (
  {
    type: LOGIN, payload: data
  }
);
