const queryOfRecords = function(transactionDetails, details) {
  let empId = details.empId;

  const oldTransaction = transactionDetails.filter(isIncludedEmpId);
  const totalJuices = oldTransaction.reduce(countJuice, 0);
  return totalJuice;
  //   const empId = usrArgs[2];
  //   if (!Object.keys(transactionDetails).includes(empId)) {
  //     return "Transactions of this employee ID does not exists";
  //   }
  //   let employeeTransactions = "Employee ID , Beverage , Quantity , date \n";
  //   let total = 0;
  //   employeeTransactions += empId + ",";
  //   employeeTransactions += transactionDetails[empId][0].beverage + ",";
  //   employeeTransactions += transactionDetails[empId][0].qty + ",";
  //   employeeTransactions += transactionDetails[empId][0].date + "\n";
  //   total += Number(transactionDetails[empId][0].qty);
  //   employeeTransactions += "Total:" + total;
  //   return employeeTransactions;
  // };
};

const isIncludedEmpId = function(transaction) {
  return empId === transaction.empId;
};

const countJuice = function(totalJuice, transaction) {
  return totalJuice + +transaction.qty;
};

exports.queryOfRecords = queryOfRecords;
