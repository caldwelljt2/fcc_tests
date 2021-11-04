function palindrome(str) {
    if (str.length <= 2) {
      return true
    } else if (str[0] == str[str.length-1]) {
      console.log(str,str.slice(1, -1))
      return palindrome(str.slice(1, -1))  // forgot to RETURN this for way tooo long. how else would it "capture" the base's true from above?
      // return true
    } else {
      return false;
    }
  // return true
  }
  
  console.log(palindrome("abcdefgfedcba"));
  