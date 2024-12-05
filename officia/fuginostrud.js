const stack = true; // Assume stacking is enabled
const field = 'sales'; // The field we are checking
const stackDimensions = new Set(['region', 'product']); // The dimensions that are considered for stacking

const isStackedMeasure = stack && !stackDimensions.has(field);

console.log(isStackedMeasure); // Output: true, because 'sales' is not in stackDimensions
