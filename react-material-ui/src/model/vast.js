export const ViewableImpressionModel = {
  Viewable: {
    value: null
  },
  NotViewable: {
    value: null
  },
  ViewUndetermined: {
    value: null
  }
};

export const VerificationModel = {
    vendor: null,
    JavaScriptResource: {
      apiFramework: null,
      value: null
    },
    FlashResource: {
      apiFramework: null,
      value: null
    },
    ViewableImpression: {
      id: null,
      value: null
    }
};

export const ExtensionModel = {
  Extension: {
    type: null,
    value: null
  }
};

export const CreativeExtensionModel = {
  CreativeExtension: {
    type: null,
    value: null
  }
};

export const MediaFileModel = {
  MediaFile: {
    id: null,
    delivery: null,
    type: null,
    bitrate: null,
    minBitrate: null,
    maxBitrate: null,
    width: null,
    height: null,
    scalable: null,
    mantainAspectRatio: null,
    codec: null,
    apiFramework: null,
    value: null
  }
};

export const MezzanineModel = {
  Mezzanine: {
    type: null,
    value: null
  }
};

export const InteractiveCreativeFile = {
  InteractiveCreative: {
    type: null,
    value: null
  }
};

export const ClickThroughModel = {
  ClickThrough: {
    id: null,
    value: null
  }
};

export const ClickTrackingModel = {
  ClickTracking: {
    id: null,
    value: null
  }
};

export const CustomClickModel = {
  CustomClick: {
    id: null,
    value: null
  }
};

export const TrackingModel = {
  Tracking: {
    event: null,
    offset: null,
    value: null
  }
};

export const IconModel = {
  Icon: {
    program: null,
    width: null,
    height: null,
    xPosition: null,
    yPosition: null,
    duration: null,
    offset: null,
    apiFramework: null,
    pxratio: null,
    StaticResource: {
      creativeType: null,
      value: null
    },
    IFrameResource: {
      value: null
    },
    HTMLResource: {
      value: null
    },
    IconClicks: [],
    IconViewTracking: {
      value: null
    }
  }
};

export const IconClickThroughModel = {
  IconClickThrough: {
    value: null
  }
};

export const IconClickTrackingModel = {
  IconClickTracking: {
    id: null,
    value: null
  }
};

export const LinearModel = {
  skipoffset: null,
  Duration: null,
  AdParameters: {
    xmlEncoded: null,
    value: null
  },
  MediaFiles: [],
  VideoClicks: [],
  TrackingEvents: [],
  Icons: []
};

export const CreativeModel = {
  id: null,
  sequence: null,
  adId: null,
  apiFramework: null,
  UniversalAdId: {
    idRegistry: null,
    idValue: null,
    value: null
  },
  CreativeExtensions: [],
  Linear: LinearModel
};

export const ImpressionModel = {
  id: null,
  value: null
};

export const AdSystemModel = {
  version: null,
  value: null
};

export const PricingModel = {
  model: null,
  currency: null,
  value: null
};

export const ErrorModel = {
  value: null
};

export const AdTitleModel = {
  value: null
};

export const WrapperModel = {
    Impression: ImpressionModel,
    VASTAdTagUri: {
      value: null
    },
    AdSystem: AdSystemModel,
    Pricing: PricingModel,
    Error: ErrorModel,
    AdTitle: AdTitleModel,
    ViewableImpression: ViewableImpressionModel,
    AdVerifications: []
};

export const InLineModel = {
    AdSystem: AdSystemModel,
    AdTitle: AdTitleModel,
    Impression: ImpressionModel,
    Category: {
      authority: null,
      value: null
    },
    Description: {
      value: null
    },
    Advertiser: {
      value: null
    },
    Pricing: PricingModel,
    Survey: {
      type: null,
      value: null
    },
    Error: ErrorModel,
    ViewableImpression: ViewableImpressionModel,
    AdVerifications: [],
    Extensions: [],
    Creatives: []
};

export const VASTModel = {
  Ad: {
    InLine: InLineModel,
    Wrapper: WrapperModel
  }
};
