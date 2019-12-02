const isEmpIdMatched = require("./utils").isEmpIdMatched;
const isDateMatched = require("./utils").isDateMatched;
const getMessageForQuery = require("./getMessage").getMessageForQuery;

const queryOfRecords = function(transactionDetails, usrArgs) {
  const predicates = { empId: isEmpIdMatched, date: isDateMatched };
  const key = usrArgs[1].slice(2);
  const matchedValue = usrArgs[2];
  const processCommand = predicates[key];
  let giveEmpTransactions = transactionDetails.filter(
    processCommand(matchedValue)
  );
  if (usrArgs.length > 3) {
    const key = usrArgs[3].slice(2);
    const matchedValue = usrArgs[4];
    const processCommand = predicates[key];
    giveEmpTransactions = giveEmpTransactions.filter(
      processCommand(matchedValue)
    );
  }
  return getMessageForQuery(giveEmpTransactions);
};

exports.queryOfRecords = queryOfRecords;
