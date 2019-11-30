const fs = require("fs");

const date = function() {
  let date = new Date();
  date = date.toJSON();
  return date;
};

const readTransactionData = function(path, reader, encoder, doesExists) {
  if (doesExists(path)) {
    const consumptionData = reader(path, encoder);

    return JSON.parse(consumptionData);
  }
  return [];
};

const writeTransactionData = function(path, writer, encoder, content) {
  content = JSON.stringify(content);
  writer(path, content, encoder);
};

exports.date = date;
exports.readTransactionData = readTransactionData;
exports.writeTransactionData = writeTransactionData;
