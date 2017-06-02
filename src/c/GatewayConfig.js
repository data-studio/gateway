"use strict";

const EventEmitter = require('events');

module.exports = function GatewayConfigProvider () {

  return class GatewayConfig () {

    constructor (pkg, argv, process) {

      this.pkg = pkg;
      this.argv = argv;
      this.process = this.process;

    }

  };

};
