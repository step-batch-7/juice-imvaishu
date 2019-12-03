const { writeTransactionData } = require("./utils");
const { getMessageForSave } = require("./getMessage.js");

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

module.exports = { saveRecords };
