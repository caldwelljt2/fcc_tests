function checkCashRegister(price, cash, cid) {
    // let change;
    console.log(cid[0][1])
    let p = cid[0][1] / 0.01
    console.log(p)
    let n = cid[1][1] / 0.05
    let d = cid[2][1] / 0.1
    let q = cid[3][1] / 0.25
    let ones = cid[4][1] / 1
    let fives = cid[5][1] / 5
    let tens = cid[6][1] /10
    let twenties = cid[7][1] /20
    let hund = cid[8][1] /100
    let change =  price - cash
    console.log('change',change)
    console.log('hunds', hund)
    while (change > 0) {
      if (change >= 100 && hund > 0) {
        console.log('give 100')
        change -= 100
        hund -= 1
      } else if (change >= 20 && twenties > 0) {
        console.log('give 20')
        change -= 20
        twenties -= 1
      } else if (change >= 10 && tens > 0) {
        console.log('give 10',tens)
        change -= 10
        tens -= 1
      } else if (change >= 5 && fives > 0) {
        console.log('give 5')
        change -= 5
        fives  -= 1
      }  else if (change >= 1 && ones > 0) {
        console.log('give 1')
        change -= 5
        ones  -= 1
        console.log('ones at' , ones)
    } else if (change >= 0.25 && q > 0) {
        console.log('give 0.25',q)
        change = change - 0.25
        q -= 1
    } else if (change >= 0.1 && d > 0) {
        console.log('give 0.1',d)
        change -= 0.1
        d -= 1
    } else if (change >= 0.05 && n > 0) {
        console.log('give 0.05')
        change -= 0.05
        n -= 1
    } else if (change >= 0.01 && p > 1) {
        console.log('give 0.01',p)
        change -= 0.01
        p -= 1
    } else {
      console.log('out of cash')
      change = 0
    }
    }
    return change;
  }
  checkCashRegister(1119.56, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);