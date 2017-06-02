"use strict";

const Gateway = require("./Gateway");
const ServiceType = require("../Service/Type/ServiceType");

describe(`Gateway`, function () {

  let gateway;

  beforeEach(function () {
    gateway = new Gateway();
  });

  describe(`gateway.serviceType("auth") @return value`, function () {

    let result;

    beforeEach(function () {
      result = gateway.serviceType("auth");
    });

    it(`should be an instance of ServiceType`, function () {
      expect(result)
        .toEqual(jasmine.any(ServiceType));
    });

    it(`should have a property "id" with the value "auth"`, function () {
      expect(result.id)
        .toEqual("auth");
    });

  });

});
