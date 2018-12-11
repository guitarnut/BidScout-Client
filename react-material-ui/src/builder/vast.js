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
  data.type = 'InLine';
  data.vastVersion = response.vast.version;
  data.vastAdId = response.vast.Ad.id;
  data.vastAdSequence = response.vast.Ad.sequence;

  if(response.vast.Ad.InLine !== undefined) {
    data.vastAdInLineAdSystemValue = response.vast.Ad.InLine.AdSystem.value;
    data.vastAdInLineAdTitle = response.vast.Ad.InLine.AdTitle.value;

    data.vastAdInLineCreativesCreativeId = response.vast.Ad.InLine.Creatives[0].id;
    data.vastAdInLineCreativesCreativeSequence = response.vast.Ad.InLine.Creatives[0].sequence;
    data.vastAdInLineCreativesCreativeAdId = response.vast.Ad.InLine.Creatives[0].adId;
    data.vastAdInLineCreativesCreativeApiFramework = response.vast.Ad.InLine.Creatives[0].apiFramework;

    if(response.vast.Ad.InLine.Creatives[0].UniversalAdId !== undefined) {
      data.vastAdInLineCreativesCreativeUniversalAdIdIdRegistry = response.vast.Ad.InLine.Creatives[0].UniversalAdId.registry;
      data.vastAdInLineCreativesCreativeUniversalAdIdIdValue = response.vast.Ad.InLine.Creatives[0].UniversalAdId.idValue;
      data.vastAdInLineCreativesCreativeUniversalAdIdValue = response.vast.Ad.InLine.Creatives[0].UniversalAdId.value;
    }

    data.vastAdInLineCreativesCreativeLinearSkipoffset = response.vast.Ad.InLine.Creatives[0].Linear.skipoffset;
    data.vastAdInLineCreativesCreativeLinearDuration = response.vast.Ad.InLine.Creatives[0].Linear.duration;

    data.vastAdInLineCreativesCreativeLinearAdParametersXmlEncoded = response.vast.Ad.InLine.Creatives[0].Linear.AdParameters.xmlEncoded;
    data.vastAdInLineCreativesCreativeLinearAdParametersValue = response.vast.Ad.InLine.Creatives[0].Linear.AdParameters.value;

    data.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileId = response.vast.Ad.InLine.Creatives[0].Linear.MediaFiles[0].id;
    data.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileDelivery = response.vast.Ad.InLine.Creatives[0].Linear.MediaFiles[0].delivery;
    data.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileType = response.vast.Ad.InLine.Creatives[0].Linear.MediaFiles[0].type;
    data.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileBitrate = response.vast.Ad.InLine.Creatives[0].Linear.MediaFiles[0].bitrate;
    data.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileMinBitrate = response.vast.Ad.InLine.Creatives[0].Linear.MediaFiles[0].minBitrate;
    data.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileMaxBitrate = response.vast.Ad.InLine.Creatives[0].Linear.MediaFiles[0].maxBitrate;
    data.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileWidth = response.vast.Ad.InLine.Creatives[0].Linear.MediaFiles[0].width;
    data.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileHeight = response.vast.Ad.InLine.Creatives[0].Linear.MediaFiles[0].height;
    data.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileScalable = response.vast.Ad.InLine.Creatives[0].Linear.MediaFiles[0].scalable;
    data.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileMaintainAspectRatio = response.vast.Ad.InLine.Creatives[0].Linear.MediaFiles[0].maintainAspectRatio;
    data.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileCodec = response.vast.Ad.InLine.Creatives[0].Linear.MediaFiles[0].codec;
    data.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileApiFramework = response.vast.Ad.InLine.Creatives[0].Linear.MediaFiles[0].apiFramework;
    data.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileApiFramework = response.vast.Ad.InLine.Creatives[0].Linear.MediaFiles[0].apiFramework;
    data.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileValue =  response.vast.Ad.InLine.Creatives[0].Linear.MediaFiles[0].value;
  }

  return data;
}

export function buildVastLinearAdModelFromState(state) {
  let model = VASTModel;
  model.version = state.vastVersion;

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
