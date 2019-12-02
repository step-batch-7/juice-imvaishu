const assert = require("assert");
const saveRecords = require("../src/saveRecords").saveRecords;

describe("saveRecords", function() {
  it("sholud save transaction record for new employee", function() {
    let transactionDetails = [];
    let details = {
      empId: 11111,
      beverage: "orange",
      qty: 1,
      date: "2019-11-30T15:48:32.840Z"
    };
    let path = "beverage.json";
    const actualValue = saveRecords(transactionDetails, path, details);

    const expectedValue =
      "Transaction Recorded:\n" +
      "Employee ID,Beverage,Quantity,Date\n" +
      "11111,orange,1,2019-11-30T15:48:32.840Z";
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});

describe("saveRecords", function() {
  it("should save transaction of same employee", function() {
    let transactionDetails = [
      {
        empId: 11111,
        beverage: "orange",
        qty: 1,
        date: "2019-11-30T15:48:32.840Z"
      }
    ];
    let details = {
      empId: 11111,
      beverage: "orange",
      qty: 1,
      date: "2019-11-30T15:48:32.840Z"
    };
    let path = "beverage.json";
    const actualValue = saveRecords(transactionDetails, path, details);
    const expectedValue =
      "Transaction Recorded:\n" +
      "Employee ID,Beverage,Quantity,Date\n" +
      "11111,orange,1,2019-11-30T15:48:32.840Z";
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});

describe("saveRecords", function() {
  it("should save transaction of new employee if old transaction recorded previously", function() {
    let transactionDetails = [
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
    let details = {
      empId: 12345,
      beverage: "pineapple",
      qty: 1,
      date: "2019-11-30T15:48:32.840Z"
    };
    let path = "beverage.json";
    const actualValue = saveRecords(transactionDetails, path, details);
    const expectedValue =
      "Transaction Recorded:\n" +
      "Employee ID,Beverage,Quantity,Date\n" +
      "12345,pineapple,1,2019-11-30T15:48:32.840Z";
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});
