import ModelRequirements from "./requirements";
import ModelLimits from "./limits";
import ModelStatistics from "./statistics";

const ModelCampaign = {
  name: null,
  enabled: false,
  cid: null,
  publisher: null,
  seat: null,
  nurl: null,
  impressionExpiry: 0,
  requirements: ModelRequirements,
  limits: ModelLimits,
  statistics: ModelStatistics
};

export default ModelCampaign;
