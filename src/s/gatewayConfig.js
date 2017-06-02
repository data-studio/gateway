"use strict";

const GatewayConfig = require('../c/GatewayConfig');

module.exports = function gatewayConfigProvider () {
  return new GatewayConfig(...arguments);
};
