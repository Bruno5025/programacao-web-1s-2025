function verificacao(n){
    if(n <= 1){
        return false;
    }

    if(n % 2 == 0 && n != 2){
        return false;
    }

    for(let i = 3; i < n; i += 2){
        if(n % i == 0){
            return false;
        }
    }

    return true;
}

console.log(`verificacao(0)=${verificacao(0)}`); //false
console.log(`verificacao(1)=${verificacao(1)}`); //false
console.log(`verificacao(2)=${verificacao(2)}`); //true
console.log(`verificacao(3)=${verificacao(3)}`); //true
console.log(`verificacao(7)=${verificacao(7)}`); //true
console.log(`verificacao(83)=${verificacao(83)}`); //true
console.log(`verificacao(100)=${verificacao(100)}`); //false
console.log(`verificacao(991)=${verificacao(991)}`); //true
console.log(`verificacao(104729)=${verificacao(104729)}`); //true
console.log(`verificacao(14348907)=${verificacao(14348907)}`); //false
