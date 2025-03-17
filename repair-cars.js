function minRepairTime(ranks, totalCars) {
  const mechanics = ranks.sort((a, b) => a - b); // Lower rank means more efficient
  const carsAssigned = new Array(mechanics.length).fill(0);
  let maxTime = 0;

  // Assign each car to the mechanic that results in the minimum increase in max time
  for (let i = 0; i < totalCars; i++) {
    let minTimeIndex = 0;
    let minProjectedTime = Infinity;

    for (let j = 0; j < mechanics.length; j++) {
      // Calculate what would happen if we gave one more car to mechanic j
      const projectedTime = mechanics[j] * Math.pow(carsAssigned[j] + 1, 2);
      if (projectedTime < minProjectedTime) {
        minTimeIndex = j;
        minProjectedTime = projectedTime;
      }
    }

    // Assign the car and update the max time if necessary
    carsAssigned[minTimeIndex]++;
    const newTime =
      mechanics[minTimeIndex] * Math.pow(carsAssigned[minTimeIndex], 2);
    maxTime = Math.max(maxTime, newTime);
  }

  return maxTime;
}

const ranks = [1, 4, 7, 9];
const totalCars = 26;
console.log(minRepairTime(ranks, totalCars));
