const writeTransactionData = require("./utils").writeTransactionData;

const saveRecords = function(transactionDetails, usrArgs, date, path) {
  let empId = usrArgs[4];
  let beverage = usrArgs[2];
  let qty = usrArgs[6];
  if (!Object.keys(transactionDetails).includes(empId)) {
    transactionDetails[empId] = [];
  }
  transactionDetails[empId].push({
    beverage: beverage,
    qty: +qty,
    date: date
  });
  writeTransactionData(path, transactionDetails);
  let recordedTransaction = "Transaction Recorded\n";
  recordedTransaction += "Employee ID , Beverage , Quantity , date \n";
  recordedTransaction += empId + "," + beverage + "," + qty + "," + date;
  return recordedTransaction;
};

exports.saveRecords = saveRecords;
