/**
 * 화살표 함수
 */

// ES5
function myFunc1(name) {
    return '안녕 ' + name;
}
console.log(myFunc1('Jeongho'));

// ES6
const myFunc2 = (name) => {
    return `안녕  ${name}`;
}
console.log(myFunc2('호야'));


/**
 * 템플릿 리터럴
 */

// ES5 템플릿 리터럴 등장 전
function myFunc3(name) {
    return "안녕 내 이름은 " + name + " 야!!";
}
console.log(myFunc3('정호'));

// ES6 템플릿 리터럴 등장 후 (백틱 사용)
const myFunc4 = (name, age) => {
    return `안녕 내 이름은 ${name}이고, 나이는 ${age}살이야!!`;
}
console.log(myFunc4('정호', 28));




