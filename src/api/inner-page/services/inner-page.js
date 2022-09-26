'use strict';

/**
 * inner-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::inner-page.inner-page');
