const { changeObjectToString } = require("./utils");
const { countJuice } = require("./utils");

const getMessageForSave = function(details) {
  let { empId, beverage, qty, date } = details;
  let recordedTransaction = "Transaction Recorded:\n";
  recordedTransaction += "Employee ID,Beverage,Quantity,Date\n";
  recordedTransaction += empId + "," + beverage + "," + qty + "," + date;
  return recordedTransaction;
};

const getMessageForQuery = function(giveEmpTransactions) {
  const totalJuice = giveEmpTransactions.reduce(countJuice, 0);

  let message = giveEmpTransactions.reduce(
    changeObjectToString,
    "Employee ID,Beverage,Quantity,Date\n"
  );
  return message + "Total: " + totalJuice + " Juices";
};

module.exports = { getMessageForSave, getMessageForQuery };
