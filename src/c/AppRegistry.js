"use strict";

const GatewayRegistry = require('./GatewayRegistry');

module.exports = function AppRegistryProvider (GatewayID) {

  return class AppRegistry extends GatewayRegistry () {

    constructor () {
      super(...arguments);
    }

  };

};
