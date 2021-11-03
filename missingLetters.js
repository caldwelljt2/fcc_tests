function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let firstLetter = alphabet.indexOf(str[0])
    for (let i = firstLetter; i < firstLetter + str.length; i++)
      {
        if (str[i-firstLetter] != alphabet[i]) {
          return alphabet[i]
          }
      }
      return undefined;
    }
    
console.log(
"\nFor String: cdeg \nAnswer:",fearNotLetter("cdeg"),
"\nFor String: abce \nAnswer:",fearNotLetter("abce"), // should return the string d.
"\nFor String: abcdefghjklmno \nAnswer:",fearNotLetter("abcdefghjklmno"), // should return the string i.
"\nFor String: stvwx \nAnswer:",fearNotLetter("stvwx"), // should return the string u.
"\nFor String: bcdf \nAnswer:",fearNotLetter("bcdf"), // should return the string e.
"\nFor String: abcdefghijklmnopqrstuvwxyz \nAnswer:",fearNotLetter("abcdefghijklmnopqrstuvwxyz"), // should return undefined.
    )