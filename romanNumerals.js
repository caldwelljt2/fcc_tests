function convertToRoman(num) {
    let answer = ""
    let m = num
      while ( m >= 0) {
        // console.log(answer,m)
        
        if (m >= 1000) {
          answer = answer + "M"
          m -= 1000
        } else if (m >= 900) {
          answer = answer + "CM"
          m -= 900
        } else if (m >= 800) {
          answer = answer + "DCCC"
          m -= 800
        } else if (m >= 700) {
          answer = answer + "DCC"
          m -= 700
        } else if (m >= 600) {
          answer = answer + "DC"
          m -= 600
        } else if (m >= 500) {
          answer = answer + "D"
          m -= 500
        } else if (m >= 400) {
          answer = answer + "CD"
          m -= 400
        } else if (m >= 300) {
          answer = answer + "CCC"
          m -= 300
        } else if (m >= 200) {
          answer = answer + "CC"
          m -= 200
        } else if (m >= 100) {
          answer = answer + "C"
          m -= 100
        } else if (m >= 90) {
          answer = answer + "XC"
          m -= 90
        } else if (m >= 80) {
          answer = answer + "LXXX"
          m -= 80
        } else if (m >= 70) {
          answer = answer + "LXX"
          m -= 70
        } else if (m >= 60) {
          answer = answer + "LX"
          m -= 60
        } else if (m >= 50) {
          answer = answer + "L"
          m -= 50
        } else if (m >= 40) {
          answer = answer + "XL"
          m -= 40
        } else if (m >= 30) {
          answer = answer + "XXX"
          m -= 30
        } else if (m >= 20) {
          answer = answer + "XX"
          m -= 20
        } else if (m >= 10) {
          answer = answer + "X"
          m -= 10
        } else if (m >= 9) {
          answer = answer + "IX"
          m -= 9
        } else if (m >= 8) {
          answer = answer + "VIII"
          m -= 8
        } else if (m >= 7) {
          answer = answer + "VII"
          m -= 7
        } else if (m >= 6) {
          answer = answer + "VI"
          m -= 6
        } else if (m >= 5) {
          answer = answer + "V"
          m -= 5
        } else if (m >= 4) {
          answer = answer + "IV"
          m -= 4
        } else if (m >= 3) {
          answer = answer + "III"
          m -= 3
        } else if (m >= 2) {
          answer = answer + "II"
          m -= 2
        } else if (m >= 1) {
          answer = answer + "I"
          m -= 1
        }
      }
     return answer;
    }
    
    console.log(convertToRoman(3999));