"use strict";

const Gateway = require("./Gateway");
const ServiceType = require("../Service/Type/ServiceType");

describe(`Gateway`, function () {

  let gateway;

  beforeEach(function () {
    gateway = new Gateway();
  });

  describe(`gateway.serviceType("auth") @return value`, function () {

    let returnValue;

    beforeEach(function () {
      returnValue = gateway.serviceType("auth");
    });

    it(`should be an instance of ServiceType`, function () {
      expect(returnValue)
        .toEqual(jasmine.any(ServiceType));
    });

    it(`should have a property "id" with the value "auth"`, function () {
      expect(returnValue.id)
        .toEqual("auth");
    });

  });

  describe(`gateway.verify(signedMessage, senderKey) @return value`, function () {

    let returnValue;
    let senderKey;
    let signedMessage;

    beforeEach(function () {

      signedMessage = {
        "message": `{\n  "Foo": "Bars",\n  "Baz'ss": "Quux"\n}\n`,
        "signature": "06725481712ea419877ce7251daf3cff4155b6e6ef567ef8406719df1cd71f8c"
      };

      senderKey = "daba5c4dad742f60f10597991fdfe1310a7c1fe0ac09324cb4a976962ec439e8";

      returnValue = gateway.verify(signedMessage, senderKey);

    });

    it("should be true if the hmac signature is correct", function () {
      expect(returnValue).toBe(true);
    });

  });

});
