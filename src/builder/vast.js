import {
  AdModel,
  AdParametersModel,
  AdSystemModel,
  AdTitleModel,
  CreativeModel,
  CreativesModel,
  InLineModel,
  LinearModel,
  MediaFileModel,
  UniversalAdIdModel,
  VASTModel
} from "../model/vast";

export function buildVastStateFromResponse(response) {
  let data = {
    name: '',
    type: 'InLine',
    id: '',

    vastVersion: '',

    vastAdId: '',
    vastAdSequence: '',

    // add wrapper

    vastAdInLineAdSystemValue: '',
    vastAdInLineAdTitle: '',

    vastAdInLineCreativesCreativeId: '',
    vastAdInLineCreativesCreativeSequence: '',
    vastAdInLineCreativesCreativeAdId: '',
    vastAdInLineCreativesCreativeApiFramework: '',

    vastAdInLineCreativesCreativeUniversalAdIdIdRegistry: '',
    vastAdInLineCreativesCreativeUniversalAdIdIdValue: '',
    vastAdInLineCreativesCreativeUniversalAdIdValue: '',

    vastAdInLineCreativesCreativeLinearSkipoffset: '',
    vastAdInLineCreativesCreativeLinearDuration: '',
    vastAdInLineCreativesCreativeLinearAdParametersXmlEncoded: '',
    vastAdInLineCreativesCreativeLinearAdParametersValue: '',

    vastAdInLineCreativesCreativeLinearMediaFilesMediaFileId: '',
    vastAdInLineCreativesCreativeLinearMediaFilesMediaFileDelivery: '',
    vastAdInLineCreativesCreativeLinearMediaFilesMediaFileType: '',
    vastAdInLineCreativesCreativeLinearMediaFilesMediaFileBitrate: '',
    vastAdInLineCreativesCreativeLinearMediaFilesMediaFileMinBitrate: '',
    vastAdInLineCreativesCreativeLinearMediaFilesMediaFileMaxBitrate: '',
    vastAdInLineCreativesCreativeLinearMediaFilesMediaFileWidth: '',
    vastAdInLineCreativesCreativeLinearMediaFilesMediaFileHeight: '',
    vastAdInLineCreativesCreativeLinearMediaFilesMediaFileScalable: '',
    vastAdInLineCreativesCreativeLinearMediaFilesMediaFileMaintainAspectRatio: '',
    vastAdInLineCreativesCreativeLinearMediaFilesMediaFileCodec: '',
    vastAdInLineCreativesCreativeLinearMediaFilesMediaFileApiFramework: '',
    vastAdInLineCreativesCreativeLinearMediaFilesMediaFileValue: ''
  };

  data.id = response.id;
  data.name = response.name;
  data.type = response.type || 'InLine';
  data.vastVersion = response.vast.version;
  data.vastAdId = response.vast.Ad.id;
  data.vastAdSequence = response.vast.Ad.sequence;

  if (response.vast.Ad.InLine !== undefined) {
    data.vastAdInLineAdSystemValue = response.vast.Ad.InLine.AdSystem.value;
    data.vastAdInLineAdTitle = response.vast.Ad.InLine.AdTitle.value;

    if (response.vast.Ad.InLine.Creatives !== undefined && response.vast.Ad.InLine.Creatives.length > 0) {
      response.vast.Ad.InLine.Creatives.map((c) => {
        data.vastAdInLineCreativesCreativeId = c.id;
        data.vastAdInLineCreativesCreativeSequence = c.sequence;
        data.vastAdInLineCreativesCreativeAdId = c.adId;
        data.vastAdInLineCreativesCreativeApiFramework = c.apiFramework;

        if (c.UniversalAdId !== undefined) {
          data.vastAdInLineCreativesCreativeUniversalAdIdIdRegistry = c.UniversalAdId.registry;
          data.vastAdInLineCreativesCreativeUniversalAdIdIdValue = c.UniversalAdId.idValue;
          data.vastAdInLineCreativesCreativeUniversalAdIdValue = c.UniversalAdId.value;
        }

        if (c.Linear !== undefined) {
          data.vastAdInLineCreativesCreativeLinearSkipoffset = c.Linear.skipoffset;
          data.vastAdInLineCreativesCreativeLinearDuration = c.Linear.duration;

          if (c.Linear.AdParameters !== undefined) {
            data.vastAdInLineCreativesCreativeLinearAdParametersXmlEncoded = c.Linear.AdParameters.xmlEncoded;
            data.vastAdInLineCreativesCreativeLinearAdParametersValue = c.Linear.AdParameters.value;
          }
          if (c.Linear.MediaFiles !== undefined && c.Linear.MediaFiles.length > 0) {
            c.Linear.MediaFiles.map((m) => {
              data.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileId = m.id;
              data.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileDelivery = m.delivery;
              data.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileType = m.type;
              data.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileBitrate = m.bitrate;
              data.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileMinBitrate = m.minBitrate;
              data.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileMaxBitrate = m.maxBitrate;
              data.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileWidth = m.width;
              data.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileHeight = m.height;
              data.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileScalable = m.scalable;
              data.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileMaintainAspectRatio = m.maintainAspectRatio;
              data.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileCodec = m.codec;
              data.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileApiFramework = m.apiFramework;
              data.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileApiFramework = m.apiFramework;
              data.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileValue = m.value;
            });
          }
        }
      });
    }
  }

  return data;
}

export function buildVastLinearAdModelFromState(state) {
  let model = VASTModel;
  model.version = state.vastVersion;
  model.type = state.type;

  model.Ad = AdModel;
  model.Ad.id = state.vastAdId;
  model.Ad.sequence = state.vastAdSequence;

  model.Ad.InLine = InLineModel;
  model.Ad.InLine.AdSystem = AdSystemModel;
  model.Ad.InLine.AdTitle = AdTitleModel;
  model.Ad.InLine.AdSystem.value = state.vastAdInLineAdSystemValue;
  model.Ad.InLine.AdTitle.value = state.vastAdInLineAdTitle;

  let mediaFile = MediaFileModel;
  mediaFile.id = state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileId;
  mediaFile.delivery = state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileDelivery;
  mediaFile.type = state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileType;
  mediaFile.bitrate = state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileBitrate;
  mediaFile.minBitrate = state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileMinBitrate;
  mediaFile.maxBitrate = state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileMaxBitrate;
  mediaFile.width = state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileWidth;
  mediaFile.height = state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileHeight;
  mediaFile.scalable = state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileScalable;
  mediaFile.maintainAspectRatio = state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileMaintainAspectRatio;
  mediaFile.codec = state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileCodec;
  mediaFile.apiFramework = state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileApiFramework;
  mediaFile.value = state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileValue;

  let linear = LinearModel;
  linear.skipoffset = state.vastAdInLineCreativesCreativeLinearSkipoffset;
  linear.duration = state.vastAdInLineCreativesCreativeLinearDuration;

  if (state.vastAdInLineCreativesCreativeLinearAdParametersValue.length > 0) {
    linear.AdParameters = AdParametersModel;
    linear.AdParameters.xmlEncoded = state.vastAdInLineCreativesCreativeLinearAdParametersXmlEncoded;
    linear.AdParameters.value = state.vastAdInLineCreativesCreativeLinearAdParametersValue;
  }

  linear.MediaFiles = [mediaFile];

  let creative = CreativeModel;
  creative.id = state.vastAdInLineCreativesCreativeId;
  creative.sequence = state.vastAdInLineCreativesCreativeSequence;
  creative.adId = state.vastAdInLineCreativesCreativeAdId;
  creative.apiFramework = state.vastAdInLineCreativesCreativeApiFramework;
  creative.Linear = linear;

  if (state.vastAdInLineCreativesCreativeUniversalAdIdValue.length > 0) {
    let universalAdId = UniversalAdIdModel;
    universalAdId.idRegistry = state.vastAdInLineCreativesCreativeUniversalAdIdIdRegistry;
    universalAdId.idValue = state.vastAdInLineCreativesCreativeUniversalAdIdIdValue;
    universalAdId.value = state.vastAdInLineCreativesCreativeUniversalAdIdValue;
    creative.UniversalAdId = universalAdId;
  }

  model.Ad.InLine.Creatives = [creative];

  return model;
}
