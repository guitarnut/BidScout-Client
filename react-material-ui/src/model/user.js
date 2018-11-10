const ModelUser = {
  _id: null,
  username: null,
  roles: [],
  enabled: null,
  created: null,
  lastLogin: null,
  Address: null,
  City: null,
  State: null,
  zip: null,
  email: null,
  phone: null,
  ipAccess: [],
  uaAccess: [],
  dateAccess: [],
  failedLoginAttemptCount: 0
};

export default ModelUser;
