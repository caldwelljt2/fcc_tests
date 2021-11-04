  function palindrome(str) {
    let word = str.replace(/[^a-zA-Z0-9]+/g,"").toLowerCase()   // didn't relize the test wanted to test sentances and remove all punctuation
    console.log(word)
    if (word.length <= 2 && word[0] == word[word.length-1]) {  // forgot to take into account 2 character missmatched cases
      return true
    } else if (word[0] == word[word.length-1]) {
      console.log(word,word.slice(1, -1))
      return palindrome(word.slice(1, -1)) // forgot to RETURN this for way tooo long. how else would it "capture" the base's true from above?
      // return true
    } else {
      return false;
    }
  // return true
  }
  
  console.log(palindrome("almostomla"));
  
  // console.log("_eye".replace(/\W/g,""))
  // console.log("almostomla".replace(/[^a-zA-Z]+/g,""))
  // console.log("moadsf".slice(1, -1))