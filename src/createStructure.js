const createStructure = function(usrArgs, date) {
  let table = {};
  table.empId = +usrArgs[4];
  table.beverage = usrArgs[2];
  table.qty = +usrArgs[6];
  table.date = date;
  return table;
};
exports.createStructure = createStructure;
