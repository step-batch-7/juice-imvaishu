const getRecordDataPath = function(env) {
  if (env.beverageRecordDataPath === undefined) {
    return "./data/beverageTransactionsRecord.json";
  }
  return env.beverageRecordDataPath;
};

const getDate = function(env) {
  if (env.NOW === undefined) {
    return new Date().toJSON();
  }
  return env.NOW;
};

module.exports = { getRecordDataPath, getDate };
