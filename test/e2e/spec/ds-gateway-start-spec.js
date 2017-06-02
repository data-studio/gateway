const path = require("path");

class E2eTestGateway {
  constructor () {
    this.path = path.resolve(`./.tmp/${uuid.v4()}`);
    mkdir(this.path);
  }
}

describe(`E2E Case: ds-gateway start`, function () {

  let cwd;

  beforeEach(function () {
    let testGateway = new E2eTestGateway();
    cwd = testGateway.path;
    child_process.exec("./bin/ds-gateway start", function () {

    });
  });

});

function mkdir () {

}
