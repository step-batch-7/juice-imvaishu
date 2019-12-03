const { getMessageForQuery } = require("./getMessage");
const { isBeverageMatched, isDateMatched, isEmpIdMatched } = require("./utils");

const queryOfRecords = function(transactionDetails, usrArgs) {
  let giveEmpTransactions = transactionDetails;
  const predicates = {
    empId: isEmpIdMatched,
    date: isDateMatched,
    beverage: isBeverageMatched
  };

  for (let index = 1; index < usrArgs.length; index += 2) {
    const key = usrArgs[index].slice(2);
    const matchedValue = usrArgs[index + 1];
    const processCommand = predicates[key];
    giveEmpTransactions = giveEmpTransactions.filter(
      processCommand(matchedValue)
    );
  }

  return getMessageForQuery(giveEmpTransactions);
};

module.exports = { queryOfRecords };
