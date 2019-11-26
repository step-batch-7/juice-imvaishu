const readTransactionData = require("./utils").readTransactionData;
const saveRecords = require("./saveRecords.js").saveRecords;

const getTransactionDetails = function(usrArgs, path, date) {
  let transactionDetails = readTransactionData(path);
  return saveRecords(transactionDetails, usrArgs, date, path);
};

exports.getTransactionDetails = getTransactionDetails;
