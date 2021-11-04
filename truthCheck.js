function truthCheck(collection, pre) {
    for (let i = 0; i < collection.length; i++) {
      if (!collection[i][pre]) {return false}
      console.log(collection[i],collection[i][pre])
      // for (let prop in collection[i]) {
      //   console.log(prop,collection[i][prop])
      // }
    }
    return true;
  }
  truthCheck([{"single": "double"}, {"single": NaN}], "single");