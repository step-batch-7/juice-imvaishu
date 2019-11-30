const writeTransactionData = require("./utils").writeTransactionData;
const getMessageForSave = require("./getMessage.js").getMessageForSave;
const fs = require("fs");

const saveRecords = function(transactionDetails, path, details) {
  writeTransactionData(path, fs.writeFileSync, "utf-8", transactionDetails);
  return getMessageForSave(details);
};

exports.saveRecords = saveRecords;
