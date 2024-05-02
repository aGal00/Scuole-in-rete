'use strict';

/**
 * open-day service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::open-day.open-day');
