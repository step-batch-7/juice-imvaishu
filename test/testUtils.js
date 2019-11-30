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
