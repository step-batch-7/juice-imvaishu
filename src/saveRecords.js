const writeTransactionData = require("./utils").writeTransactionData;
const getMessageForSave = require("./getMessage.js").getMessageForSave;
const fs = require("fs");

const saveRecords = function(
  transactionDetails,
  path,
  writer,
  encoder,
  details
) {
  writeTransactionData(path, writer, encoder, transactionDetails);
  return getMessageForSave(details);
};

exports.saveRecords = saveRecords;
