import ModelCreative from "../model/creative";

export function buildCreativeStateFromResponse(response) {
  let data = {
    id: '',
    owner: '',
    name: '',
    type: '',
    w: '',
    h: '',
    enabled: false,
    iabCategories: [],
    attr: [],
    btype: [],
    mimes: [],
    adId: '',
    crid: '',
    adDomain: [],
    creativeUrl: '',
    adm: '',
    xml: '',
    xmlId: '',
    minBid: '',
    maxBid: '',
    bidFrequency: 0,

    requirementsUserMatch: false,
    requirementsSecure: false,
    requirementsPublisherWhitelist: [],
    requirementsDomainWhitelist: [],
    requirementsBundleWhitelist: [],
    requirementsPublisherBlacklist: [],
    requirementsDomainBlacklist: [],
    requirementsBundleBlacklist: [],
    requirementsDealIds: [],
    requirementsMobile: false,
    requirementsDesktop: false,
    requirementsInapp: false,
    requirementsCtv: false,
    requirementsStartDate: '',
    requirementsEndDate: '',

    limitsRequestLimit: 0,
    limitsBidRate: 0,
    limitsBidLimit: 0,
    limitsImpressionLimit: 0,
    limitsRevenueLimit: 0,

    statsBids: 0,
    statsNbr: 0,
    statsImpressions: 0,
    statsDuplicateImpressions: 0,
    statsExpiredImpressions: 0,
    statsInvalidImpressions: 0,
    statsRevenue: 0,
    statsEcpm: 0,
    statsRequests: 0,
    statsBidPriceTotal: 0,
    statsClicks: 0
  };

  data.id = response.id;
  data.owner = response.owner;
  data.name = response.name;
  data.type = response.type;
  data.w = response.w;
  data.h = response.h;
  data.enabled = response.enabled;
  data.iabCategories = response.iabCategories;
  data.attr = response.attr;
  data.btype = response.btype;
  data.mimes = response.mimes;
  data.adId = response.adId;
  data.crid = response.crid;
  data.adDomain = response.adDomain;
  data.creativeUrl = response.creativeUrl;
  data.adm = response.adm;
  data.xml = response.xml;
  data.xmlId = response.xmlId;
  data.minBid = response.minBid;
  data.maxBid = response.maxBid;
  data.bidFrequency = response.bidFrequency;

  data.requirementsUserMatch = response.requirements.userMatch;
  data.requirementsSecure = response.requirements.secure;
  data.requirementsPublisherWhitelist = response.requirements.publisherWhitelist;
  data.requirementsDomainWhitelist = response.requirements.domainWhitelist;
  data.requirementsBundleWhitelist = response.requirements.bundleWhitelist;
  data.requirementsPublisherBlacklist = response.requirements.publisherBlacklist;
  data.requirementsDomainBlacklist = response.requirements.domainBlacklist;
  data.requirementsBundleBlacklist = response.requirements.bundleBlacklist;
  data.requirementsDealIds = response.requirements.dealIds;
  data.requirementsMobile = response.requirements.mobile;
  data.requirementsDesktop = response.requirements.desktop;
  data.requirementsInapp = response.requirements.inapp;
  data.requirementsCtv = response.requirements.ctv;
  data.requirementsStartDate = response.requirements.startDate;
  data.requirementsEndDate = response.requirements.endDate;

  data.limitsRequestLimit = response.limits.requestLimit;
  data.limitsBidRate = response.limits.bidRate;
  data.limitsBidLimit = response.limits.bidLimit;
  data.limitsImpressionLimit = response.limits.impressionLimit;
  data.limitsRevenueLimit = response.limits.revenueLimit;

  data.statsBids = response.statistics.bids;
  data.statsNbr = response.statistics.nbr;
  data.statsImpressions = response.statistics.impressions;
  data.statsDuplicateImpressions = response.statistics.duplicateImpressions;
  data.statsExpiredImpressions = response.statistics.expiredImpressions;
  data.statsInvalidImpressions = response.statistics.invalidImpressions;
  data.statsRevenue = response.statistics.revenue;
  data.statsEcpm = response.statistics.ecpm;
  data.statsRequests = response.statistics.requests;
  data.statsBidPriceTotal = response.statistics.bidPriceTotal;
  data.statsClicks = response.statistics.clicks;

  return data;
}

export function buildCreativeModelFromState(state) {
  let model = ModelCreative;
  model.id = state.id;
  model.owner = state.owner;
  model.name = state.name;
  model.type = state.type;
  model.w = state.w;
  model.h = state.h;
  model.enabled = state.enabled;
  model.iabCategories = state.iabCategories;
  model.attr = state.attr;
  model.btype = state.btype;
  model.mimes = state.mimes;
  model.adId = state.adId;
  model.crid = state.crid;
  model.adDomain = state.adDomain;
  model.creativeUrl = state.creativeUrl;
  model.adm = state.adm;
  model.xml = state.xml;
  model.xmlId = state.xmlId;
  model.minBid = state.minBid;
  model.maxBid = state.maxBid;
  model.bidFrequency = state.bidFrequency;

  model.requirements.userMatch = state.requirementsUserMatch;
  model.requirements.secure = state.requirementsSecure;
  model.requirements.publisherWhitelist = state.requirementsPublisherWhitelist;
  model.requirements.domainWhitelist = state.requirementsDomainWhitelist;
  model.requirements.bundleWhitelist = state.requirementsBundleWhitelist;
  model.requirements.publisherBlacklist = state.requirementsPublisherBlacklist;
  model.requirements.domainBlacklist = state.requirementsDomainBlacklist;
  model.requirements.bundleBlacklist = state.requirementsBundleBlacklist;
  model.requirements.dealIds = state.requirementsDealIds;
  model.requirements.mobile = state.requirementsMobile;
  model.requirements.desktop = state.requirementsDesktop;
  model.requirements.inapp = state.requirementsInapp;
  model.requirements.ctv = state.requirementsCtv;
  model.requirements.startDate = state.requirementsStartDate;
  model.requirements.endDate = state.requirementsEndDate;

  model.limits.requestLimit = state.limitsRequestLimit;
  model.limits.bidRate = state.limitsBidRate;
  model.limits.bidLimit = state.limitsBidLimit;
  model.limits.impressionLimit = state.limitsImpressionLimit;
  model.limits.revenueLimit = state.limitsRevenueLimit;

  return model;
}
