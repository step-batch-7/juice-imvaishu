const assert = require("assert");
const getTransactionDetails = require("../src/getTransactionDetails.js")
  .getTransactionDetails;

describe("getTransactionDetails", function() {
  it("should return message of transaction recorded if file contains empty array", function() {
    const usrArgs = [
      "--save",
      "--beverage",
      "orange",
      "--empId",
      "11111",
      "--qty",
      "1"
    ];
    const reader = function(path, encoder) {
      assert.strictEqual(path, "path");
      assert.strictEqual(encoder, "utf-8");
      return "[]";
    };

    const doesExists = function(path) {
      return false;
    };

    let calledTimes = 0;
    const writer = function(path, content, encoder) {
      assert.strictEqual(path, "path");
      assert.strictEqual(
        content,
        '[{"empId":"11111","beverage":"orange","qty":1,"date":"' + date + '"}]'
      );
      assert.strictEqual(encoder, "utf-8");
      calledTimes += 1;
    };

    let date = new Date();
    date = date.toJSON();

    const actualValue = getTransactionDetails(
      usrArgs,
      "path",
      reader,
      "utf-8",
      date,
      writer,
      doesExists
    );
    const expectedValue =
      "Transaction Recorded:\n" +
      "Employee ID,Beverage,Quantity,Date\n" +
      "11111,orange,1," +
      date;
    assert.deepStrictEqual(actualValue, expectedValue);
    assert.strictEqual(calledTimes, 1);
  });

  it("should return message of transaction recorded if file contains transactions", function() {
    const usrArgs = [
      "--save",
      "--beverage",
      "pineapple",
      "--empId",
      "25347",
      "--qty",
      "1"
    ];
    const reader = function(path, encoder) {
      assert.strictEqual(path, "path");
      assert.strictEqual(encoder, "utf-8");
      return '[{"empId":"25347","beverage":"pineapple","qty":5,"date":"2019-12-02T11:59:13.787Z"}]';
    };
    let calledTimes = 0;
    const writer = function(path, content, encoder) {
      assert.strictEqual(path, "path");
      assert.strictEqual(
        content,
        '[{"empId":"25347","beverage":"pineapple","qty":5,"date":"2019-12-02T11:59:13.787Z"},{"empId":"25347","beverage":"pineapple","qty":1,"date":"' +
          date +
          '"}]'
      );
      assert.strictEqual(encoder, "utf-8");
      calledTimes += 1;
    };

    const doesExists = function(path) {
      assert.strictEqual(path, "path");
      return true;
    };

    let date = new Date();
    date = date.toJSON();
    const actualValue = getTransactionDetails(
      usrArgs,
      "path",
      reader,
      "utf-8",
      date,
      writer,
      doesExists
    );
    const expectedValue =
      "Transaction Recorded:\n" +
      "Employee ID,Beverage,Quantity,Date\n" +
      "25347,pineapple,1," +
      date;
    assert.deepStrictEqual(actualValue, expectedValue);
    assert.strictEqual(calledTimes, 1);
  });

  it("should return query message of transaction based on employeeId", function() {
    const usrArgs = ["--query", "--empId", "25347"];
    const reader = function(path, encoder) {
      assert.strictEqual(path, "path");
      assert.strictEqual(encoder, "utf-8");
      return '[{"empId":"25347","beverage":"pineapple","qty":5,"date":"2019-12-02T11:59:13.787Z"}]';
    };

    const doesExists = function(path) {
      assert.strictEqual(path, "path");
      return true;
    };

    const writer = function() {};

    const actualValue = getTransactionDetails(
      usrArgs,
      "path",
      reader,
      "utf-8",
      "2019-12-02T11:59:13.787Z",
      writer,
      doesExists
    );

    let expectedValue = "Employee ID,Beverage,Quantity,Date\n";
    expectedValue += "25347,pineapple,5,2019-12-02T11:59:13.787Z\n";
    expectedValue += "Total: 5 Juices";

    assert.deepStrictEqual(actualValue, expectedValue);
  });
});
