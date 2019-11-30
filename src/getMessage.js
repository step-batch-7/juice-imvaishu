const getMessageForSave = function(details) {
  let { empId, beverage, qty, date } = details;
  let recordedTransaction = "Transaction Recorded:\n";
  recordedTransaction += "Employee ID,Beverage,Quantity,Date\n";
  recordedTransaction += empId + "," + beverage + "," + qty + "," + date;
  return recordedTransaction;
};

exports.getMessageForSave = getMessageForSave;
