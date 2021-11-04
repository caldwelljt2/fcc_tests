function steamrollArray(arr) {
    console.log(arr)
    const newArray = [].concat(...arr);
    if (newArray.some((testArray) => {
        return Array.isArray(testArray)
        }))
    {
      return steamrollArray(newArray)
    } else {
      return newArray
    }
    // return newArray.some(Array.isArray) ? steamrollArray(newArray) : newArray; // better answer than mine
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);
  
  // for (let i = 0; i < arr.length; i++) {
  //   if (Array.isArray(arr[i])){
  //     console.log(arr)
  //     return arr
  //     console.log('found array')
  //   } else {
  //     steamrollArray(arr.flat())
  //   }
  // }
    // if (!arr[1]) {
    //   console.log('success')
    //   return arr.flat()
    // } else {
    // }
  
  
  //   return arr;
  // }
  steamrollArray([[2]]);
  // steamrollArray([1, [2], [3, [[4]]]]);
