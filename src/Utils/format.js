// Insert commas into a large number
export function numberWithCommas (x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Generates a comma-separated list of values
export function createCommaSeparatedList (list, key) {
  return list.map(listItem => listItem[key]).join(', ')
}