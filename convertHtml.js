function convertHTML(str) {
    console.log('Question: ', str)
    let newString = ""
    for (let char in str) {
  
      switch (str[char]) {
        case "&":
            newString += '&amp;'
        break
        case ">":
            newString += '&gt;'
        break
        case "<":
            newString += '&lt;'
        break
        case "'":
            newString += '&apos;'
        break
        case '"':
            newString += '&quot;'
        break
        default:
             newString += str[char]
        break
      }
    }
    console.log('\nAnser: ', newString)
    return newString;
  }
  
  convertHTML("Dolce & Gabbana");
  convertHTML("Hamburgers < Pizza < Tacos") // should return the string Hamburgers &lt; Pizza &lt; Tacos.
  
  convertHTML("Sixty > twelve") // should return the string Sixty &gt; twelve.
  
  convertHTML('Stuff in "quotation marks"') // should return the string Stuff in &quot;quotation marks&quot;.
  
  convertHTML("Schindler's List") // should return the string Schindler&apos;s List.
  
  convertHTML("<>") // should return the string &lt;&gt;.
  
  convertHTML("abc") // should return the string abc.