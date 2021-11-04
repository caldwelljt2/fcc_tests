function rot13(str) {
    let alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let rotAlph = "NOPQRSTUVWXYZABCDEFGHIJKLM"
  
    return  str.replace(/[A-Z]/g,((letter) => {
    let lIndex = alph.indexOf(letter)
    return rotAlph[lIndex]
    }))
    
  }
  
  rot13("SERR PBQR PNZC");