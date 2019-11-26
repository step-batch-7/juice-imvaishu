const getTransactionDetails = require("./src/getTransactionDetails.js")
  .getTransactionDetails;
const date = require("./src/utils.js").date;
console.log("Anna Juice Ltd");

const main = function() {
  const usrArgs = process.argv.slice(2);
  let path = "./beverage.json";
  let transactionRecord = getTransactionDetails(usrArgs, path, date());
  console.log(transactionRecord);
};

main();
