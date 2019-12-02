const assert = require("assert");
const utils = require("../src/utils");

describe("readTransactionData", function() {
  it("should reader return correct string if reader called with right path and encoder", function() {
    const reader = function(path, encoder) {
      assert.strictEqual(path, "path");
      assert.strictEqual(encoder, "utf-8");
      return '{"empId": 25275}';
    };

    const doesExits = function(path) {
      return true;
    };

    assert.deepStrictEqual(
      utils.readTransactionData("path", reader, "utf-8", doesExits),
      { empId: 25275 }
    );
  });

  it("should return empty if file does not exitsts and valid path passed", function() {
    const reader = function() {};
    const doesExits = function(path) {
      assert.strictEqual(path, "path");
      return false;
    };
    assert.deepStrictEqual(
      utils.readTransactionData("path", reader, "utf-8", doesExits),
      []
    );
  });
});

describe("writeTransactionData", function() {
  it("should called one times and right path, encoder and content passed", function() {
    let calledTimes = 0;
    const writer = function(path, content, encoder) {
      assert.strictEqual(path, "path");
      assert.strictEqual(content, '{"empId":25275}');
      assert.strictEqual(encoder, "utf-8");
      calledTimes += 1;
    };
    utils.writeTransactionData("path", writer, "utf-8", { empId: 25275 });
    assert.strictEqual(calledTimes, 1);
  });
});

describe("changeObjectToString ", function() {
  it("should change object to string", function() {
    const message = "Employee ID,Beverage,Quantity,Date\n";
    const transaction = {
      empId: 11111,
      beverage: "orange",
      qty: 1,
      date: "2019-11-30T15:48:32.840Z"
    };
    const actualValue = utils.changeObjectToString(message, transaction);
    let expectedValue = "Employee ID,Beverage,Quantity,Date\n";
    expectedValue += "11111,orange,1,2019-11-30T15:48:32.840Z\n";
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});

describe("isEmpIdMatched", function() {
  it("should return true if empId is matched", function() {
    empId = 11111;
    transaction = {
      empId: 11111,
      beverage: "orange",
      qty: 1,
      date: "2019-11-30T15:48:32.840Z"
    };
    const actualValue = utils.isEmpIdMatched(empId)(transaction);
    const expectedValue = true;
    assert.strictEqual(actualValue, expectedValue);
  });
  it("should return false if empId is not matched", function() {
    empId = 11111;
    transaction = {
      empId: 11121,
      beverage: "orange",
      qty: 1,
      date: "2019-11-30T15:48:32.840Z"
    };
    const actualValue = utils.isEmpIdMatched(empId)(transaction);
    const expectedValue = false;
    assert.strictEqual(actualValue, expectedValue);
  });
});

describe("countJuice", function() {
  it("should count total juices", function() {
    const totalJuice = 0;
    const transaction = {
      empId: 11121,
      beverage: "orange",
      qty: 1,
      date: "2019-11-30T15:48:32.840Z"
    };
    const actualValue = utils.countJuice(totalJuice, transaction);
    const expectedValue = 1;
    assert.strictEqual(actualValue, expectedValue);
  });
});
