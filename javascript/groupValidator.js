// Require
// Global Functions
// Local Functions
// Execution & Test Data
// Export
exports.isGroupValid = function(array) {
  if (array.length >= 6) {
    return false;
  } else if (array.length <= 1) {
    return false;
  }
  return true;
};