function myReplace(str, before, after) {

    const reBefore = new RegExp(before,"g")
    // const reAfter = new RegExp(after,"g")
    const isCap = /^[A-Z]/
    const isLC = /^[a-z]/
    
      return str.replace(/\w+/g, (word) => {
        return word.replace(reBefore, (before2) => {
          if (isCap.test(before2)) {
            return after[0].toUpperCase() + after.substring(1)
            } else if (isLC.test(before2)) {
            return after[0].toLowerCase() + after.substring(1)
            }
          return after
          })
        });
    }
    console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped"));
    console.log(myReplace("Let us go to the store", "store", "mall"));
    console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
    console.log(myReplace("I think we should look up there", "up", "Down"));
    console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
    console.log(myReplace("His name is Tom", "Tom", "john"));
    console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));
    