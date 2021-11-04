function dropElements(arr, func) {
    let newArray = [...arr]
    for (let i = 0; i < arr.length; i++) {
      if (func(arr[i])){
        return newArray
      } else {
        newArray.shift()
      }
      
    }
    console.log(newArray)
    return newArray;
  }
  
  console.log(
    dropElements([4, 2, 3], function(n) {return n < 3; }),
    dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));

    // this one was easy