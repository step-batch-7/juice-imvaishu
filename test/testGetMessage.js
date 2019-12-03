const chai = require("chai");
const assert = chai.assert;
const { getMessageForSave, getMessageForQuery } = require("../src/getMessage");

describe("getMessageForSave", function() {
  it("should return save message after transaction recorded", function() {
    const details = {
      empId: 1111,
      beverage: "orange",
      qty: 1,
      date: "2019-11-30T10:56:13.781Z"
    };

    const actualValue = getMessageForSave(details);

    let expectedValue = "Transaction Recorded:\n";
    expectedValue += "Employee ID,Beverage,Quantity,Date\n";
    expectedValue += "1111,orange,1,2019-11-30T10:56:13.781Z";

    assert.deepStrictEqual(actualValue, expectedValue);
  });
});

describe("getMessageForQuery", function() {
  it("should return query message", function() {
    const giveEmpTransactions = [
      {
        empId: 11111,
        beverage: "orange",
        qty: 1,
        date: "2019-11-30T15:48:32.840Z"
      },
      {
        empId: 11111,
        beverage: "orange",
        qty: 1,
        date: "2019-11-30T15:48:32.840Z"
      }
    ];

    const actualValue = getMessageForQuery(giveEmpTransactions);

    let expectedValue = "Employee ID,Beverage,Quantity,Date\n";
    expectedValue += "11111,orange,1,2019-11-30T15:48:32.840Z\n";
    expectedValue += "11111,orange,1,2019-11-30T15:48:32.840Z\n";
    expectedValue += "Total: 2 Juices";

    assert.deepStrictEqual(actualValue, expectedValue);
  });
});
