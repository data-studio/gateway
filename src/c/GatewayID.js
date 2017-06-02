"use strict";

const uuid = require('uuid');
const EventEmitter = require('events');

module.exports = class GatewayID () {

  constructor (gatewayConfig) {

    this._gatewayConfig = gatewayConfig;

    this.uuid = uuid.v4();

  }

};
