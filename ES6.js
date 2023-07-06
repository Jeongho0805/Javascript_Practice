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


/**
 * 기본 매게 변수
 */

// ES6 이전
const myFunc5 = (name, age) => {
    return `안녕 ${name} 너의 나이는 ${age}살이야?`;
}
console.log(myFunc5("정호")); // 정호 너의 나이는 undefined살이야?

// ES6 기본 매게 변수 사용
const myFunc6 = (name, age = 28) => {
    return `안녕 ${name} 너의 나이는 ${age}살이야?`;
}
console.log(myFunc6("정호")); // 정호 너의 나이는 28살이야?


/**
 * 배열 및 객체 비구조화 할당
 */

// ES5 문법
const member1 = {
    name: '정호',
    age: 28,
};
let memberNmae = member1.name;
let memberAge = member1.age;

// ES6 문법
const member2 = {
    name: '정호',
    age: 28,
}
let {memberName : name, memberAge : age} = member2;
console.log(memberNmae, memberAge); // 정호 28


/**
 * Promise
 */
const myPromise = () => {
    return new Promise((resolve, reject) => {
        resolve('안녕하세요 Promise가 성공적으로 실행되었습니다.');
    });
};
console.log(myPromise());

