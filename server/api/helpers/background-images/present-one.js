

module.exports = {
  sync: true,

  inputs: {
    record: {
      type: 'ref',
      required: true,
    },
  },

  fn(inputs) {
    return {
      ..._.omit(inputs.record, ['uploadedFileId', 'extension']),
      url: `${sails.config.custom.baseUrl}/background-images/${inputs.record.uploadedFileId}/original.${inputs.record.extension}`,
      thumbnailUrls: {
        outside360: `${sails.config.custom.baseUrl}/background-images/${inputs.record.uploadedFileId}/outside-360.${inputs.record.extension}`,
      },
    };
  },
};
