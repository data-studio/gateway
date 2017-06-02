"use strict";

const EventEmitter = require("events");

const ServiceType = require("../Service/Type/ServiceType");

module.exports = class Gateway extends EventEmitter {

  constructor () {
    super();
  }

  serviceType (id) {
    return new ServiceType(id);
  }

};
