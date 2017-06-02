"use strict";

const GatewayRegistry = require('./GatewayRegistry');

module.exports = function ServiceRegistryProvider (GatewayID) {

  return class ServiceRegistry extends GatewayRegistry () {

    constructor () {
      super(...arguments);
    }

  };

};
