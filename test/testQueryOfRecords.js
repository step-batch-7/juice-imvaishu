const assert = require("assert");
const { queryOfRecords } = require("../src/queryOfRecords");

describe("queryOfRecords", function() {
  it("should query if one record found", function() {
    const transactionDetails = [
      {
        empId: "25347",
        beverage: "pineapple",
        qty: 1,
        date: "2019-12-02T07:19:25.843Z"
      }
    ];
    const usrArgs = ["--query", "--empId", "25347"];
    const actualValue = queryOfRecords(transactionDetails, usrArgs);
    let expectedValue = "Employee ID,Beverage,Quantity,Date\n";
    expectedValue += "25347,pineapple,1,2019-12-02T07:19:25.843Z\n";
    expectedValue += "Total: 1 Juices";
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});

describe("queryOfRecords", function() {
  it("should query if more than one record found", function() {
    const transactionDetails = [
      {
        empId: "11111",
        beverage: "orange",
        qty: 1,
        date: "2019-11-30T15:48:32.840Z"
      },
      {
        empId: "11111",
        beverage: "orange",
        qty: 1,
        date: "2019-11-30T15:48:32.840Z"
      }
    ];
    const usrArgs = ["--query", "--empId", "11111"];
    const actualValue = queryOfRecords(transactionDetails, usrArgs);
    let expectedValue = "Employee ID,Beverage,Quantity,Date\n";
    expectedValue += "11111,orange,1,2019-11-30T15:48:32.840Z\n";
    expectedValue += "11111,orange,1,2019-11-30T15:48:32.840Z\n";
    expectedValue += "Total: 2 Juices";
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});

describe("queryOfRecords", function() {
  it("should return 0 juices if record was not found ", function() {
    const transactionDetails = [
      {
        empId: "25347",
        beverage: "pineapple",
        qty: 1,
        date: "2019-12-02T07:19:25.843Z"
      }
    ];

    const usrArgs = ["--query", "--empId", "25346"];
    const actualValue = queryOfRecords(transactionDetails, usrArgs);
    let expectedValue = "Employee ID,Beverage,Quantity,Date\n";
    expectedValue += "Total: 0 Juices";
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});
