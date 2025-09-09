/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalMinDays = 3;
  const totalMaxDays = 7;
  const cost = 40;
  const discountForThreeDays = 20;
  const discountForSevenDays = 50;
  const totalCost = days * cost;

  if (days < totalMinDays) {
    return totalCost;
  }

  if (days < totalMaxDays) {
    return totalCost - discountForThreeDays;
  }

  return totalCost - discountForSevenDays;
}

module.exports = calculateRentalCost;
