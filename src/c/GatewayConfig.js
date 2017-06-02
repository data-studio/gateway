"use strict";

const EventEmitter = require('events');

module.exports = function GatewayConfigProvider () {

  return class GatewayConfig {

    constructor (pkg, argv, process) {

      this._pkg = pkg;
      this._argv = argv;
      this._process = this.process;

      this.rules = {};
      this.rules.subnets = {};

      configure(this);

    }

  };

  function configure (gatewayConfig) {



  }

};
