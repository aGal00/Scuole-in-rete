'use strict';

/**
 * path service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::path.path');
