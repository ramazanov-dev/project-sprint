

module.exports = {
  sync: true,

  inputs: {
    record: {
      type: 'ref',
      required: true,
    },
  },

  fn(inputs) {
    return List.KANBAN_TYPES.includes(inputs.record.type);
  },
};
