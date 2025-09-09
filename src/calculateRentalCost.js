/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const totalMinDays = 3;
  const totalMaxDays = 7;
  const cost = 40;

  if (days < totalMinDays) {
    return days * cost;
  } else if (days < totalMaxDays) {
    return days * cost - 20;
  } else {
    return days * cost - 50;
  }
}

module.exports = calculateRentalCost;
