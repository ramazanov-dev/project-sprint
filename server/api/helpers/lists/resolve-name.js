

module.exports = {
  sync: true,

  inputs: {
    record: {
      type: 'ref',
      required: true,
    },
    t: {
      type: 'ref',
    },
  },

  fn(inputs) {
    if (inputs.record.name) {
      return inputs.record.name;
    }

    const name = _.upperFirst(inputs.record.type);
    return inputs.t ? inputs.t(name) : name;
  },
};
