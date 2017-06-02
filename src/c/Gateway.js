"use strict";

const GatewayRegistry = require('./GatewayRegistry');
const GatewayInterface = require('./GatewayInterface');

const EventEmitter = require('events');

module.exports = (function GatewayProvider () {

  const SERVICE_INTERFACE = GatewayInterface.SERVICE_INTERFACE;
  const APP_INTERFACE = GatewayInterface.APP_INTERFACE;

  class Gateway extends EventEmitter () {

    static get APPS () {
      return 'apps';
    }

    static get SERVICES () {
      return 'services';
    }

    constructor (components) {

      components = components || [];

      let interfaces = this.ifaces = [];
      let registries = this.registries = [];

      components.forEach(component => {
        initComponent(this, component);
      });

      prepareIfaces(this);

    }

    registryFor () {

    }

    openIfaces () {
      let ifaces = this.ifaces;
      ifaces.forEach(iface => {

      });
    }

  }

  return Gateway;

  function forEachInterface (gateway, fn) {
    this.interfaces.forEach(fn);
  }

  function prepareIfaces (gateway, ifaces) {
    let ifaces = gateway.ifaces;
    ifaces.forEach(iface => {
      let registry = gateway.registryFor(iface.target);
      iface.useRegistry(registry);
    });
  }

  function initComponent (gateway, component) {

    if (GatewayRegistry.is(component)) {
      let registry = component;
      return initRegistry(gateway, registry);
    }

    if (GatewayInterface.is(component)) {
      let iface = component;
      return initIface(gateway, iface);
    }

    throw new Error('Unrecognized component');

  }

  function initIface (gateway, iface) {
    return gateway.ifaces.push(iface);
  }

  function initRegistry (gateway, registry) {
    return gateway.registries.push(registry);
  }

})();
