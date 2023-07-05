/**
 * Number, Math
 */

let num = 10;
num.toString(); // "10"
num.toString(2); // "1010"

let num2 = 255;
num2.toString(16); // "ff";

console.log(Math.PI);

let num3 = 5.1;


console.log(Math.ceil(num3)); // 6 (올림)
console.log(Math.floor(num3)); // 5 (내림)
console.log(Math.round(num3)); // 5 (반올림)

let rate = 5.192939472;
console.log(rate.toFixed(2)); // 5.19 (소수점 2자리까지 표시)

let x = Number('x'); // NaN
console.log(isNaN(x)); // true -> isNaN() 함수만이 NaN을 판별할 수 있다.
console.log(NaN === NaN); // false
console.log(x === NaN); // false

// parseInt는 문자가 숫자로 시작하면 숫자만 반환한다. But Number()는 NaN을 반환한다.
let margin = '10px';
console.log(parseInt(margin)); // 10

// 만약 parseInt() 사용할 때 문자가 숫자로 시작하지 않으면 NaN을 반환한다.
let margin2 = 'px10';
console.log(parseInt(margin2)); // NaN

