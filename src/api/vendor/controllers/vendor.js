'use strict';

/**
 * vendor controller
 */

// const createPopulatedController = require("../../../helpers/populate");
const { createCoreController } = require('@strapi/strapi').factories;
module.exports = createCoreController('api::vendor.vendor');

// const schema = require("../content-types/vendor/schema.json");
// const createPopulatedController = require("../../../helpers/populate");

// module.exports = createPopulatedController("api::vendor.vendor", schema);