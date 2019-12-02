const readTransactionData = require("./utils").readTransactionData;
const save = require("./saveRecords.js").saveRecords;
const query = require("./queryOfRecords.js").queryOfRecords;
const createStructure = require("./createStructure").createStructure;
const fs = require("fs");

const getTransactionDetails = function(usrArgs, path, date) {
  let transactionDetails = readTransactionData(
    path,
    fs.readFileSync,
    "utf-8",
    fs.existsSync
  );

  const operations = { "--save": save, "--query": query };
  const operation = usrArgs[0];
  if (operation === "--save") {
    const performOperation = operations[operation];
    let details = createStructure(usrArgs, date);
    transactionDetails.push(details);
    return performOperation(transactionDetails, path, details, usrArgs);
  }

  return query(transactionDetails, usrArgs);
};

exports.getTransactionDetails = getTransactionDetails;
