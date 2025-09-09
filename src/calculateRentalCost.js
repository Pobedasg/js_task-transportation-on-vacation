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
  const discountForThreeDays = 20;
  const discountForSevenDays = 50;

  if (days < totalMinDays) {
    return days * cost;
  }

  if (days < totalMaxDays) {
    return days * cost - discountForThreeDays;
  }

  return days * cost - discountForSevenDays;
}

module.exports = calculateRentalCost;
