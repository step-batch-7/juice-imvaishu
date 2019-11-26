const assert = require("assert");
const saveRecords = require("../src/saveRecords").saveRecords;

describe("saveRecords", function() {
  it("sholud save transaction record for new employee", function() {
    let transactionDetails = {};
    let usrArgs = [
      "--save",
      "--bevareage",
      "orange",
      "empId",
      "11111",
      "qty",
      "1"
    ];
    let date = new Date();
    date = date.toJSON();
    let path = "beverage.json";
    const actualValue = saveRecords(transactionDetails, usrArgs, date, path);

    const expectedValue =
      "Transaction Recorded\n" +
      "Employee ID , Beverage , Quantity , date \n" +
      "11111,orange,1," +
      date;
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});

describe("saveRecords", function() {
  it("should save transaction of same employee", function() {
    let transactionDetails = {
      "11111": [
        { beverage: "orange", qty: 1, date: "2019-11-26T09:58:21.407Z" }
      ]
    };
    let usrArgs = [
      "--save",
      "--bevareage",
      "orange",
      "empId",
      "11111",
      "qty",
      "1"
    ];
    let date = new Date();
    date = date.toJSON();
    let path = "beverage.json";
    const actualValue = saveRecords(transactionDetails, usrArgs, date, path);
    const expectedValue =
      "Transaction Recorded\n" +
      "Employee ID , Beverage , Quantity , date \n" +
      "11111,orange,1," +
      date;
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});

describe("saveRecords", function() {
  it("should save transaction of new employee if old transaction recorded previously", function() {
    let transactionDetails = {
      "11111": [
        { beverage: "orange", qty: 1, date: "2019-11-26T09:58:21.407Z" },
        { beverage: "orange", qty: 1, date: "2019-11-26T10:02:48.037Z" }
      ]
    };

    let usrArgs = [
      "--save",
      "--bevareage",
      "pineapple",
      "empId",
      "12345",
      "qty",
      "1"
    ];
    let date = new Date();
    date = date.toJSON();
    let path = "beverage.json";
    const actualValue = saveRecords(transactionDetails, usrArgs, date, path);
    const expectedValue =
      "Transaction Recorded\n" +
      "Employee ID , Beverage , Quantity , date \n" +
      "12345,pineapple,1," +
      date;
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});
