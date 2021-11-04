function rot13(str) {
    let alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let rotAlph = "NOPQRSTUVWXYZABCDEFGHIJKLM"
  
    return  str.replace(/[A-Z]/g,((letter) => {
    let lIndex = alph.indexOf(letter)
    return rotAlph[lIndex]
    }))
    
  }
  
  rot13("SERR PBQR PNZC");
    // let alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    // let rotAlph = "NOPQRSTUVWXYZABCDEFGHIJKLM"
  
  //indexOf()
  // console.log(
  //   "ABCE".replace(/[A-Z]/g,((letter) => {
  //   console.log(letter)
  //   let lIndex = alph.indexOf(letter)
  //   console.log('lindex',lIndex)
  //   console.log('outletter',rotAlph[lIndex])
  //   console.log(alph.indexOf(letter))
  //   return rotAlph[lIndex]
  // }))
  // )
  
  //   "ABCE".replace(/[A-Z]/g,((letter) => {
  //   let lIndex = alph.indexOf(letter)
  //   return rotAlph[lIndex]
  // }))
  
  
  // .replace(/[A-Z]/g,((letter) => {
  //   let lIndex = alph.indexOf(letter)
  //   return rotAlph[lIndex]
  // }))