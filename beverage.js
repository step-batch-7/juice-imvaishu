const fs = require("fs");
const { getTransactionDetails } = require("./src/getTransactionDetails.js");
const { getRecordDataPath, getDate } = require("./src/config");

const main = function() {
  console.log("Anna Juice Ltd");
  const usrArgs = process.argv.slice(2);
  const path = getRecordDataPath(process.env);
  const date = getDate(process.env);

  let transactionRecord = getTransactionDetails(
    usrArgs,
    path,
    fs.readFileSync,
    "utf-8",
    date,
    fs.writeFileSync,
    fs.existsSync
  );
  console.log(transactionRecord);
};

main();
