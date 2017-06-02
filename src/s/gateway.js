"use strict";

const Gateway = require('../c/Gateway');

module.exports = function gatewayProvider () {
  return new Gateway(...arguments);
};
