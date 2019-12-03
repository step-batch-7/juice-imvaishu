const chai = require("chai");
const assert = chai.assert;
const { createStructure } = require("../src/createStructure");

describe("createStructure", function() {
  it("should create object of array structure", function() {
    const usrArgs = [
      "--save",
      "--beverage",
      "orange",
      "--empId",
      "11111",
      "--qty",
      "1"
    ];

    let date = "2019-11-30T15:48:32.840Z";

    const actualValue = createStructure(usrArgs, date);

    const expectedValue = {
      empId: "11111",
      beverage: "orange",
      qty: 1,
      date: "2019-11-30T15:48:32.840Z"
    };

    assert.deepStrictEqual(actualValue, expectedValue);
  });
});
