"use strict";

const GatewayID = require('../c/GatewayID');

module.exports = function gatewayConfigProvider (gatewayConfig) {
  return new GatewayID(gatewayConfig);
};
