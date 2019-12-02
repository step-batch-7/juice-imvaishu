const readTransactionData = require("./utils").readTransactionData;
const save = require("./saveRecords.js").saveRecords;
const query = require("./queryOfRecords.js").queryOfRecords;
const createStructure = require("./createStructure").createStructure;
const fs = require("fs");

const getTransactionDetails = function(
  usrArgs,
  path,
  reader,
  encoder,
  date,
  writer
) {
  let transactionDetails = readTransactionData(
    path,
    reader,
    encoder,
    fs.existsSync
  );
  const operations = { "--save": save, "--query": query };
  const operation = usrArgs[0];
  const performOperation = operations[operation];
  if (operation === "--save") {
    let details = createStructure(usrArgs, date);
    transactionDetails.push(details);
    return performOperation(transactionDetails, path, writer, encoder, details);
  }

  return performOperation(transactionDetails, usrArgs);
};

exports.getTransactionDetails = getTransactionDetails;
