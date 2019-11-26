const fs = require("fs");

const date = function() {
  let date = new Date();
  date = date.toJSON();
  return date;
};

const readTransactionData = function(path) {
  const consumptionData = fs.readFileSync(path, "utf-8");
  return JSON.parse(consumptionData);
};

const writeTransactionData = function(path, transactionDetails) {
  fs.writeFileSync(path, JSON.stringify(transactionDetails), "utf-8");
};

exports.date = date;
exports.readTransactionData = readTransactionData;
exports.writeTransactionData = writeTransactionData;
