import ModelCampaign from "../model/campaign";
import {
  AdModel, AdParametersModel,
  AdSystemModel, AdTitleModel,
  CreativeModel, CreativesModel, InLineModel,
  LinearModel,
  MediaFileModel,
  UniversalAdIdModel,
  VASTModel
} from "../model/vast";

export function buildVastStateFromResponse(response) {
  let data = {
    id: '',
    name: '',
    type: 'InLine',

    vastVersion: '',

    vastAdId: '',
    vastAdSequence: '',

    vastAdInLineAdSystemValue: '',
    vastAdInLineAdTitle: '',

    vastAdInLineCreativesCreativeId: '',
    vastAdInLineCreativesCreativeSequence: '',
    vastAdInLineCreativesCreativeAdId: '',
    vastAdInLineCreativesCreativeApiFramework: '',
    vastAdInLineCreativesCreativeUniversalAdId: '',

    vastAdInLineCreativesCreativeLinearSkipoffset: '',
    vastAdInLineCreativesCreativeLinearDuration: '',
    vastAdInLineCreativesCreativeLinearAdParameters: '',
    vastAdInLineCreativesCreativeLinearMediaFiles: '',
    vastAdInLineCreativesCreativeLinearVideoClicks: '',
    vastAdInLineCreativesCreativeLinearTrackingEvents: '',
    vastAdInLineCreativesCreativeLinearIcons: '',

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
    vastAdInLineCreativesCreativeLinearMediaFilesMediaFileApiFramework: ''
  };

  return data;
}

export function buildVastModelFromState(state) {
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

  // let universalAdId = UniversalAdIdModel;
  // creative.UniversalAdId.idRegistry = state.vastAdInLineCreativesCreativeUniversalAdIdIdRegistry;
  // creative.UniversalAdId.idValue = state.vastAdInLineCreativesCreativeUniversalAdIdIdValue;
  // creative.UniversalAdId.value = state.vastAdInLineCreativesCreativeUniversalAdIdValue;

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

  linear.AdParameters = AdParametersModel;
  linear.AdParameters.xmlEncoded = state.vastAdInLineCreativesCreativeLinearAdParametersXmlEncoded;
  linear.AdParameters.value = state.vastAdInLineCreativesCreativeLinearAdParametersValue;

  linear.MediaFiles = [mediaFile];

  let creative = CreativeModel;
  creative.id = state.vastAdInLineCreativesCreativeId;
  creative.sequence = state.vastAdInLineCreativesCreativeSequence;
  creative.adId = state.vastAdInLineCreativesCreativeAdId;
  creative.apiFramework = state.vastAdInLineCreativesCreativeApiFramework;
  creative.Linear = linear;

  model.Ad.InLine.Creatives = [creative];

  return model;
}
