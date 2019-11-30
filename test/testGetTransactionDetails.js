const assert = require("assert");
const getTransactionDetails = require("../src/getTransactionDetails.js")
  .getTransactionDetails;

describe("getTransactionDetails", function() {
  it("should return transaction details", function() {
    const usrArgs = [
      "--save",
      "--bevareage",
      "orange",
      "empId",
      "11111",
      "qty",
      "1"
    ];
    const path = "beverage.json";
    let date = new Date();
    date = date.toJSON();
    const actualValue = getTransactionDetails(usrArgs, path, date);
    const expectedValue =
      "Transaction Recorded:\n" +
      "Employee ID,Beverage,Quantity,Date\n" +
      "11111,orange,1," +
      date;
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});
