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
    id: response.id,
    name: response.name,
    type: 'InLine',

    vastVersion: response.vast.version,

    vastAdId: response.vast.Ad.id,
    vastAdSequence: response.vast.Ad.sequence,

    vastAdInLineAdSystemValue: response.vast.Ad.InLine.AdSystem.value,
    vastAdInLineAdTitle: response.vast.Ad.InLine.AdTitle.value,

    vastAdInLineCreativesCreativeId: response.vast.Ad.InLine.Creatives[0].id,
    vastAdInLineCreativesCreativeSequence: response.vast.Ad.InLine.Creatives[0].sequence,
    vastAdInLineCreativesCreativeAdId: response.vast.Ad.InLine.Creatives[0].adId,
    vastAdInLineCreativesCreativeApiFramework: response.vast.Ad.InLine.Creatives[0].apiFramework,
    vastAdInLineCreativesCreativeUniversalAdIdIdRegistry: response.vast.Ad.InLine.Creatives[0].UniversalAdId.registry,
    vastAdInLineCreativesCreativeUniversalAdIdIdValue: response.vast.Ad.InLine.Creatives[0].UniversalAdId.idValue,
    vastAdInLineCreativesCreativeUniversalAdIdValue: response.vast.Ad.InLine.Creatives[0].UniversalAdId.value,

    vastAdInLineCreativesCreativeLinearSkipoffset: response.vast.Ad.InLine.Creatives[0].Linear.skipoffset,
    vastAdInLineCreativesCreativeLinearDuration: response.vast.Ad.InLine.Creatives[0].Linear.duration,
    vastAdInLineCreativesCreativeLinearAdParametersXmlEncoded: response.vast.Ad.InLine.Creatives[0].Linear.AdParameters.xmlEncoded,
    vastAdInLineCreativesCreativeLinearAdParametersValue: response.vast.Ad.InLine.Creatives[0].Linear.AdParameters.value,

    vastAdInLineCreativesCreativeLinearMediaFilesMediaFileId: response.vast.Ad.InLine.Creatives[0].Linear.MediaFiles[0].id,
    vastAdInLineCreativesCreativeLinearMediaFilesMediaFileDelivery: response.vast.Ad.InLine.Creatives[0].Linear.MediaFiles[0].delivery,
    vastAdInLineCreativesCreativeLinearMediaFilesMediaFileType: response.vast.Ad.InLine.Creatives[0].Linear.MediaFiles[0].type,
    vastAdInLineCreativesCreativeLinearMediaFilesMediaFileBitrate: response.vast.Ad.InLine.Creatives[0].Linear.MediaFiles[0].bitrate,
    vastAdInLineCreativesCreativeLinearMediaFilesMediaFileMinBitrate: response.vast.Ad.InLine.Creatives[0].Linear.MediaFiles[0].minBitrate,
    vastAdInLineCreativesCreativeLinearMediaFilesMediaFileMaxBitrate: response.vast.Ad.InLine.Creatives[0].Linear.MediaFiles[0].maxBitrate,
    vastAdInLineCreativesCreativeLinearMediaFilesMediaFileWidth: response.vast.Ad.InLine.Creatives[0].Linear.MediaFiles[0].width,
    vastAdInLineCreativesCreativeLinearMediaFilesMediaFileHeight: response.vast.Ad.InLine.Creatives[0].Linear.MediaFiles[0].height,
    vastAdInLineCreativesCreativeLinearMediaFilesMediaFileScalable: response.vast.Ad.InLine.Creatives[0].Linear.MediaFiles[0].scalable,
    vastAdInLineCreativesCreativeLinearMediaFilesMediaFileMaintainAspectRatio: response.vast.Ad.InLine.Creatives[0].Linear.MediaFiles[0].maintainAspectRatio,
    vastAdInLineCreativesCreativeLinearMediaFilesMediaFileCodec: response.vast.Ad.InLine.Creatives[0].Linear.MediaFiles[0].codec,
    vastAdInLineCreativesCreativeLinearMediaFilesMediaFileApiFramework: response.vast.Ad.InLine.Creatives[0].Linear.MediaFiles[0].apiFramework
  };

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

  if(state.vastAdInLineCreativesCreativeLinearAdParametersValue.length > 0) {
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
