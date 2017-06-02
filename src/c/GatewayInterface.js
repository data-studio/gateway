"use strict";

const EventEmitter = require('events');

module.exports = class GatewayInterface extends EventEmitter () {

  constructor () {

    super();

    this.target = null;

  }

  static is (input) {
    return input instanceof GatewayInterface;
  }

};
