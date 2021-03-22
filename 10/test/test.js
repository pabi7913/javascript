let arrIsPrime = [];
let arrNotPrime = [];

for(let i = 2; i <= 10; i++){
    let isPrime = true;
    for(let j = 2; j < i; j++){
        if(i % j == 0){
            isPrime = false;
        }
    }
    if(isPrime == false){
        console.log(`${i} is not a prime.`);
        arrNotPrime.push(i);
        // isPrime = true;
    } else {
        console.log(`${i} is a prime.`);
        arrIsPrime.push(i);
    }
}

console.log(arrIsPrime);
console.log(arrNotPrime);
