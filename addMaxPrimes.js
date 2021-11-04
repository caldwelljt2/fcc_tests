function getPrimes(max) {               // could make negs beyond -1 by testing, saving negs, removing and test/adding at end
    if (max == 1 || max == -1) {return [1]}
    const sieve =  [];
    const primes = [];
    for (let j, i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) { // i << 1 appears to be a quick way to reference a num like bool
                sieve[j] = true;
            }
        }
    }
    console.log(sieve,primes)
    
    return primes;
}

function sumPrimes(num) {

 return getPrimes(num).reduce((num,total)=>{
    return num + total
    })

}

console.log(sumPrimes(-1));