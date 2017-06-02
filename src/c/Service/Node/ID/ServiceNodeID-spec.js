"use strict";

const ServiceNodeID = require("./ServiceNodeID");

describe(`ServiceNodeID`, function () {

  let serviceNodeID;

  beforeEach(function () {
    serviceNodeID = new ServiceNodeID();
  });

  describe(`new instance properties`, function () {

    describe(`serviceNodeID.uuid`, function () {

      it(`should have a uuid as the value`, function () {
        let uuidExpr = /^[a-f0-9]{8}\-[a-f0-9]{4}\-[a-f0-9]{4}\-[a-f0-9]{4}\-[a-f0-9]{12}$/;
        expect(uuidExpr.test(serviceNodeID.uuid))
          .toBe(true);
      });

      it(`should have a unique value`, function () {
        let newServiceNodeID = new ServiceNodeID();
        expect(serviceNodeID.uuid)
          .not
            .toBe(newServiceNodeID.uuid);
      });

    });

  });

  describe(`serviceNodeID.key`, function () {

    it(`should be null`, function () {
      expect(serviceNodeID.key)
        .toBe(null);
    });

  });

  describe(`serviceNodeID.host`, function () {

    it(`should be null`, function () {
      expect(serviceNodeID.host)
        .toBe(null);
    });

  });

});
