import ModelCampaign from "../model/campaign";
import {CreativeModel, LinearModel, MediaFileModel, VASTModel} from "../model/vast";

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

  model.Ad.id = state.vastAdId;
  model.Ad.sequence = state.vastAdSequence;

  model.Ad.InLine.AdSystem.value = state.vastAdInLineAdSystemValue;
  model.Ad.InLine.AdTitle.value = state.vastAdInLineAdTitle;

  let creative = CreativeModel;

  creative.id = state.vastAdInLineCreativesCreativeId;
  creative.sequence = state.vastAdInLineCreativesCreativeSequence;
  creative.adId = state.vastAdInLineCreativesCreativeAdId;
  creative.apiFramework = state.vastAdInLineCreativesCreativeApiFramework;
  creative.UniversalAdId.idRegistry = state.vastAdInLineCreativesCreativeUniversalAdIdIdRegistry;
  creative.UniversalAdId.idValue = state.vastAdInLineCreativesCreativeUniversalAdIdIdValue;
  creative.UniversalAdId.value = state.vastAdInLineCreativesCreativeUniversalAdIdValue;

  let linear = LinearModel;

  linear.skipoffset = state.vastAdInLineCreativesCreativeLinearSkipoffset;
  linear.duration = state.vastAdInLineCreativesCreativeLinearDuration;
  linear.AdParameters.xmlEncoded = state.vastAdInLineCreativesCreativeLinearAdParametersXmlEncoded;
  linear.AdParameters.value = state.vastAdInLineCreativesCreativeLinearAdParametersValue;

  let mediaFile = MediaFileModel;

  mediaFile.attr = state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileId;
  mediaFile.attr = state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileDelivery;
  mediaFile.attr = state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileType;
  mediaFile.attr = state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileBitrate;
  mediaFile.attr = state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileMinBitrate;
  mediaFile.attr = state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileMaxBitrate;
  mediaFile.attr = state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileWidth;
  mediaFile.attr = state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileHeight;
  mediaFile.attr = state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileScalable;
  mediaFile.attr = state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileMaintainAspectRatio;
  mediaFile.attr = state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileCodec;
  mediaFile.attr = state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileApiFramework;
  mediaFile.attr = state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileValue;

  linear.MediaFiles.push(mediaFile);
  creative.Linear = linear;
  model.Ad.InLine.Creatives.push(creative);

  delete model.Ad.InLine.AdVerifications;

  return model;
}
