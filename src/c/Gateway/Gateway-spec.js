"use strict";

const Gateway = require("./Gateway");

describe(`Gateway`, function () {

  let gateway;

  beforeEach(function () {
    gateway = new Gateway();
  });

  describe(`gateway.serviceType("auth") @return value`, function () {

    it(`should be an instance of ServiceType`, function () {
      expect(gateway.serviceType())
    });

    it(`should have a property ID with the value "auth"`, function () {
      expect(gateway.serviceType().id).toEqual("auth");
    });

  });

});
