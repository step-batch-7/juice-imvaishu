const readTransactionData = function(path, reader, encoder, doesExists) {
  if (doesExists(path)) {
    const consumptionData = reader(path, encoder);

    return JSON.parse(consumptionData);
  }
  return [];
};

const writeTransactionData = function(path, writer, encoder, content) {
  content = JSON.stringify(content);
  writer(path, content, encoder);
};

const changeObjectToString = function(message, transaction) {
  let transactionMessage = `${message}`;
  transactionMessage += `${transaction.empId},${transaction.beverage},`;
  transactionMessage += `${transaction.qty},${transaction.date}\n`;
  return transactionMessage;
};

const isEmpIdMatched = function(empId) {
  return function(transaction) {
    return transaction.empId === empId;
  };
};

const isBeverageMatched = function(beverage) {
  return function(transaction) {
    return transaction.beverage === beverage;
  };
};

const countJuice = function(totalJuice, transaction) {
  return totalJuice + +transaction.qty;
};

const isDateMatched = function(date) {
  return function(transaction) {
    return transaction.date.slice(0, 10) === date;
  };
};

module.exports = {
  readTransactionData,
  writeTransactionData,
  changeObjectToString,
  isEmpIdMatched,
  isDateMatched,
  isBeverageMatched,
  countJuice
};
