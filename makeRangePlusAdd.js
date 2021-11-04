// Add all numbers in range given just the first and last as array
function sumAll(arr) {
  console.log(arr)
  let bigVal = arr[0]
  let littleVal = arr[1]
  if (arr[1] > arr[0]) { [bigVal, littleVal] = [littleVal, bigVal] }
  console.log(littleVal, bigVal)
  let newArray = []
  for (let i = littleVal; i <= bigVal; i++) {
    // console.log(i)
    newArray.push(i)
  }
  console.log(newArray)
  return newArray;
}

console.log(sumAll([1, 55]));
