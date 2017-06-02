"use strict";

const EventEmitter = require('events');

module.exports = class GatewayInterface extends EventEmitter () {

  constructor () {
    super();
  }

  static is (input) {
    return input instanceof GatewayInterface;
  }

};
