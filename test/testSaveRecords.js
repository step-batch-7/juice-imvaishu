const assert = require("assert");
const saveRecords = require("../src/saveRecords").saveRecords;

describe("saveRecords", function() {
  it("sholud save transaction record for new employee", function() {
    let transactionDetails =
      "[{empId:11111,beverage:orange,qty:1,date:2019-11-30T15:48:32.840Z}]";
    let details = {
      empId: 11111,
      beverage: "orange",
      qty: 1,
      date: "2019-11-30T15:48:32.840Z"
    };

    let calledTimes = 0;
    const writer = function(path, content, encoder) {
      assert.strictEqual(path, "path");
      assert.strictEqual(encoder, "utf-8");
      assert.strictEqual(
        content,
        '"[{empId:11111,beverage:orange,qty:1,date:2019-11-30T15:48:32.840Z}]"'
      );
      assert.strictEqual(encoder, "utf-8");
      calledTimes += 1;
    };

    const actualValue = saveRecords(
      transactionDetails,
      "path",
      writer,
      "utf-8",
      details
    );

    const expectedValue =
      "Transaction Recorded:\n" +
      "Employee ID,Beverage,Quantity,Date\n" +
      "11111,orange,1,2019-11-30T15:48:32.840Z";
    assert.deepStrictEqual(actualValue, expectedValue);
    assert.strictEqual(calledTimes, 1);
  });

  it("should save transaction if one more transaction recorded", function() {
    let transactionDetails =
      "[{empId:11111,beverage:orange,qty:1,date:2019-11-30T15:48:32.840Z},";
    transactionDetails +=
      "{empId:11111,beverage:orange,qty:1,date:2019-11-30T15:48:32.840Z}]";
    let details = {
      empId: 11111,
      beverage: "orange",
      qty: 1,
      date: "2019-11-30T15:48:32.840Z"
    };

    let contentForMatch =
      '"[{empId:11111,beverage:orange,qty:1,date:2019-11-30T15:48:32.840Z},';
    contentForMatch +=
      '{empId:11111,beverage:orange,qty:1,date:2019-11-30T15:48:32.840Z}]"';
    let calledTimes = 0;
    const writer = function(path, content, encoder) {
      assert.strictEqual(path, "path");
      assert.strictEqual(encoder, "utf-8");
      assert.strictEqual(content, contentForMatch);
      assert.strictEqual(encoder, "utf-8");
      calledTimes += 1;
    };

    const actualValue = saveRecords(
      transactionDetails,
      "path",
      writer,
      "utf-8",
      details
    );

    const expectedValue =
      "Transaction Recorded:\n" +
      "Employee ID,Beverage,Quantity,Date\n" +
      "11111,orange,1,2019-11-30T15:48:32.840Z";
    assert.deepStrictEqual(actualValue, expectedValue);
    assert.strictEqual(calledTimes, 1);
  });
});
