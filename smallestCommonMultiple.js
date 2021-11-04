// used a piece of code I made myself (getRangeArray), from earlier assignment
// obtained gcd and lcm from two different online sources.
// created logic myself, but had to lookup syntax

function gcd(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  const lcm = (a, b) => a * b / gcd(a, b)
  function getRangeArray(arr) {
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

function smallestCommons(arr) {
    const rangeArray = getRangeArray(arr)
    let total = rangeArray[0]
    denomMax = rangeArray.reduce((num,total) => {
            console.log(gcd(num,total))
            // if (total < gcd(num,total)) {}
            return lcm(num,total)
        })
    console.log(denomMax)
    let bigNum, littleNum
    if (arr[0] < arr[1]) {
        [littleNum, bigNum] = [ arr[0], arr[1] ]
    } else {
        [littleNum, bigNum] = [ arr[1], arr[0] ]
    }
    console.log(littleNum,bigNum)



    for (let i = littleNum; i <= bigNum; i++) {
        // console.log(i)
    }
  }

  smallestCommons([1,5]);