"use strict";

const Jasmine = require('jasmine');
const jasmine = new Jasmine();
const config = require("./jasmine.json");

jasmine.loadConfig(config);

const SpecReporter = require("jasmine-spec-reporter").SpecReporter;
const customReporter = new SpecReporter();

jasmine.addReporter(customReporter);

jasmine.onComplete(function (passed) {

  if (passed) {
    console.log('All specs have passed');
    process.exit(0);
  }

  console.log('At least one spec has failed');
  process.exit(1);

});

jasmine.execute();
