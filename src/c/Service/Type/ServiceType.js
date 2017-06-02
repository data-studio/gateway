"use strict";

const EventEmitter = require("events");

module.exports = class ServiceType extends EventEmitter {

  constructor (id) {

    super();

    this.id = id;

  }

};
