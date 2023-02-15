// N1
let stepStr = '';
for(let i = 20; i <= 30; i = i + 0.5){
        stepStr += i + ' ';
}
console.log('N1) ' + stepStr);

// // N2
let dollar = 27;
let dollarStr = '';
for(let i = 10; i <= 100; i = i + 10){
    dollarStr += i * dollar + ' ';
}

console.log('N2) ' + dollarStr);

// // N3
let n = 48;
let strN = '';
for(let i = 1; i <= 100; i++){
    if(i**2 < n){
        strN += i + ' ';
    }
}
console.log('N3) ' + strN);

// N4
let simpleNum = 17;
let resultStr = '';
let count = 0;
for(let i = 1; i <= simpleNum; i++){
    if(simpleNum % i == 0){
        count++;
    }
    if(count > 2){
        resultStr = 'N4) ' + simpleNum + ' - This num is not simple';
    }else {
        resultStr = 'N4) ' + simpleNum + ' - This num is simple';
    }
}
console.log(resultStr, count);

// N5
let someNum = 49;
const ispectNum = 3;
let resultInspectStr = '';
for(let i=1; i <= someNum; i++){
    if(ispectNum**i <= someNum && ispectNum**i == someNum){
        resultInspectStr = 'можна отримати';
        break;
    }else {
        resultInspectStr = 'не можна отримати';
    }
}
console.log('N5) з числа ' + someNum + ' ' + resultInspectStr)