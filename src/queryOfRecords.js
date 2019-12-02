const isEmpIdMatched = require("./utils").isEmpIdMatched;
const getMessageForQuery = require("./getMessage").getMessageForQuery;

const queryOfRecords = function(transactionDetails, usrArgs) {
  const empId = usrArgs[2];

  let giveEmpTransactions = transactionDetails.filter(isEmpIdMatched(empId));
  return getMessageForQuery(giveEmpTransactions);
};

exports.queryOfRecords = queryOfRecords;
