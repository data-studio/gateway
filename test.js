"use strict";

const Jasmine = require("jasmine");
const jasmine = new Jasmine();
const config = require("./jasmine.json");

const JasmineSpecReporter = require("jasmine-spec-reporter");

const SpecReporter = JasmineSpecReporter.SpecReporter;
const TimeProcessor = getTimeProcessor(JasmineSpecReporter);
const customReporter = new SpecReporter({
  customProcessors: [TimeProcessor]
});

const colors = require("colors/safe");

jasmine.loadConfig(config);

jasmine.clearReporters();
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

function getTimeProcessor (JasmineSpecReporter) {

  var DisplayProcessor = JasmineSpecReporter.DisplayProcessor;

  function TimeProcessor (configuration) {

  }

  function getTime() {
    return (Date.now() + "").substr(-4);
  }

  TimeProcessor.prototype = new DisplayProcessor();

  TimeProcessor.prototype.displaySuite = function (suite, log) {
    return prefix(log);
  };

  TimeProcessor.prototype.displaySuccessfulSpec = function (spec, log) {
    return prefix(log);
  };

  TimeProcessor.prototype.displayFailedSpec = function (spec, log) {
    return prefix(log);
  };

  TimeProcessor.prototype.displayPendingSpec = function (spec, log) {
    return prefix(log);
  };

  function prefix (log) {
    return '[' + colors.dim(getTime()) + '] ' + log;
  }

  return TimeProcessor;

}
