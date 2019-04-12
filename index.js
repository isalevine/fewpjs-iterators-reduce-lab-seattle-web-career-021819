array = [1, 2, 3, 25]

function countEm(array) {
  return array.reduce(addValues, 0)
}

function addValues(acc, val) {
  return acc + val
}

let totalBatteries = countEm(array)
