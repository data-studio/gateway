"use strict";

const EventEmitter = require('events');

module.exports = class GatewayRegistry extends EventEmitter {

  constructor () {
    super();
  }

  static is (input) {
    return input instanceof GatewayRegistry;
  }

};
