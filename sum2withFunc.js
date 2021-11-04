function addTogether(a, b) {
    if (typeof(a) != "number") {
      console.log('ooops nothing to do')
      return undefined
      }
    if (b == undefined) {
      return (b) => {
        addTogether(a, b)
        }
    }
    if (typeof(b) != "number") {
      return undefined
    }
  
    return a + b;
  }
  // addTogether(2,3)
  console.log(addTogether(2));