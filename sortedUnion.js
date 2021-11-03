function uniteUnique(...arr) {
    console.log('Question: \n',arr)
    let newArray = arr[0]
    
    for (let item in arr) {
      for (let num in arr[item]) {
           if (item > 0) {
              
              if (newArray.some( (num2) => {return (num2 == arr[item][num])})) {
              } else {
                newArray.push(arr[item][num])
              }
            }
           }  
    
    }
      console.log('Answer: \n', newArray)
      const uniteUnique = ([...arr]) => [...new Set(arr.flat())]
      console.log('Better Answer: ', uniteUnique(arr))
      return newArray;
    }
     
    uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
    uniteUnique([1, 2, 3], [5, 2, 1]);
    uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);