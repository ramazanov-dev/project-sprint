/*!
 * Copyright (c) 2025 PROJECT_SPRINT Software GmbH
 * Licensed under the Fair Use License: https://github.com/plankanban/planka/blob/master/LICENSE.md
 */

module.exports = {
  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'index',
    },
  },

  fn() {
    return {
      basePath: sails.config.custom.baseUrlPath,
    };
  },
};
