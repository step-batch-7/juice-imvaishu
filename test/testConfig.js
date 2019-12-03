const chai = require("chai");
const assert = chai.assert;
const { getRecordDataPath, getDate } = require("../src/config");

describe("getRecordDataPath", function() {
  it("should return env path if env is defined", function() {
    const env = { beverageRecordDataPath: "./temporaryStorePath.json" };
    const actualValue = getRecordDataPath(env);
    const expectedValue = "./temporaryStorePath.json";
    assert.strictEqual(actualValue, expectedValue);
  });

  it("should return dafault path if env is undefined", function() {
    const env = {};
    const actualValue = getRecordDataPath(env);
    const expectedValue = "./data/beverageTransactionsRecord.json";
    assert.strictEqual(actualValue, expectedValue);
  });
});

describe("getDate", function() {
  it("should return new date if env is undefined", function() {
    const env = {};
    const actualValue = getDate(env);
    const expectedValue = new Date().toJSON();
    assert.strictEqual(actualValue, expectedValue);
  });

  it("should return default date if env is defined", function() {
    const env = { NOW: "2019-12-03T05:13:40.773Z" };
    const actualValue = getDate(env);
    const expectedValue = "2019-12-03T05:13:40.773Z";
    assert.strictEqual(actualValue, expectedValue);
  });
});
