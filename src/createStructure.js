const createStructure = function(usrArgs, date) {
  let table = {};
  table.empId = usrArgs[usrArgs.indexOf("--empId") + 1];
  table.beverage = usrArgs[usrArgs.indexOf("--beverage") + 1];
  table.qty = +usrArgs[usrArgs.indexOf("--qty") + 1];
  table.date = date;
  return table;
};
exports.createStructure = createStructure;
