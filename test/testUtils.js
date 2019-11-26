const assert = require("assert");
const utils = require("../src/utils");

describe("date", function() {
  it("should return system date ", function() {
    const actualValue = utils.date();
    let date = new Date();
    date = date.toJSON();

    const expectedValue = date;
    assert.equal(actualValue, expectedValue);
  });
});
