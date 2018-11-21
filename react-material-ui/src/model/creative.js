import ModelRequirements from "./requirements";
import ModelLimits from "./limits";
import ModelStatistics from "./statistics";

const ModelCreative = {
  id: null,
  owner: null,
  name: null,
  type: null,
  w: null,
  h: null,
  enabled: false,
  type: null,
  iabCategories: [],
  attr: [],
  btype: [],
  mimes: [],
  adId: null,
  crid: null,
  adDomain: [],
  creativeUrl: null,
  adm: null,
  xml: null,
  minBid: null,
  maxBid: null,
  requirements: ModelRequirements,
  limits: ModelLimits,
  statistics: ModelStatistics
};

export default ModelCreative;
