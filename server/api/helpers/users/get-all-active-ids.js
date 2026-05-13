

module.exports = {
  inputs: {
    roleOrRoles: {
      type: 'json',
      required: true,
    },
  },

  async fn(inputs) {
    const users = await User.qm.getAll({
      roleOrRoles: inputs.roleOrRoles,
      isDeactivated: false,
    });

    return sails.helpers.utils.mapRecords(users);
  },
};
