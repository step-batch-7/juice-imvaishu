const assert = require("assert");
const { getMessageForSave } = require("../src/getMessage");

describe("getMessageForSave", function() {
  it("should return save message after transaction recorded", function() {
    const details = {
      empId: "1111",
      beverage: "orange",
      qty: "1",
      date: "2019-11-30T10:56:13.781Z"
    };
    const actualValue = getMessageForSave(details);
    let expectedValue = "Transaction Recorded:\n";
    expectedValue += "Employee ID,Beverage,Quantity,Date\n";
    expectedValue += "1111,orange,1,2019-11-30T10:56:13.781Z";

    assert.deepStrictEqual(actualValue, expectedValue);
  });
});
