function pairElement(str) {
    console.log('For string:\n' + str)
    let answer = []
    for (let letter in str) {
      switch (str[letter]){
        case "G":
        answer.push(["G","C"])
        break
        case "C":
        answer.push(["C","G"])
        break
        case "A":
        answer.push(["A","T"])
        break
        case "T":
        answer.push(["T","A"])
        break
        default:
        answer.push(['invalid input'])
      }
    }
    console.log("Answer: \n",answer)
    return answer;
  }
  
  pairElement("ATCGA"); // should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
  pairElement("TTGAG"); // should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
  pairElement("TTGAG"); //should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]