export function buildCampaignStateFromResponse(response) {
  let data = {
    id: null,
    owner: null,
    name: null,
    enabled: false,
    cid: null,
    publisher: null,
    seat: null,
    nurl: null,
    impressionExpiry: 0,

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
    requirementsStartDate: null,
    requirementsEndDate: null,

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
  data.enabled = response.enabled;
  data.cid = response.cid;
  data.publisher = response.publisher;
  data.seat = response.seat;
  data.nurl = response.nurl;
  data.impressionExpiry = response.impressionExpiry;

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
