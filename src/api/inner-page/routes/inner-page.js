'use strict';

/**
 * inner-page router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::inner-page.inner-page');
