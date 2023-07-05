/**
 * Symbol
 */
const a = Symbol();
const b = Symbol();
console.log(a === b); // false로 나온다.

const id1 = Symbol('id');
const id2 = Symbol('id');
console.log(id1 === id2); // false로 나온다.

const id = Symbol('id');
const user = {
    name : 'Mike',
    age : 30,
    [id] : 'myid'
}
// 객체 정보에 Symbol이 있으면 keys나 values 메서드에서 건너뛴다.
console.log(Object.keys(user)); // name, age만 나온다.
console.log(Object.values(user)); // Mike, 30만 나온다.
console.log(Object.entries(user)); // [Array(2), Array(2)]로 나온다.


// Symbol은 동일하게 생성해도 다르게 취급되지만, Symbol.for을 사용하면 동일하게 취급된다.
const ex1 = Symbol.for('ex');
const ex2 = Symbol.for('ex');
console.log(ex1 === ex2); // true로 나온다.

// Symbol.for로 생성된 Symbol은 Symbol.keyFor로 이름을 확인할 수 있다.
console.log(Symbol.keyFor(ex1)); // 'ex'로 나온다.


// Object.keys()에서 숨겨진 Symbol을 보는 방법
console.log(Object.getOwnPropertySymbols(user)); // [Symbol(id)]가 나온다
console.log(Reflect.ownKeys(user)); // ["name", "age", Symbol(id)]가 나온다.
 

// Symbol 활용하기
const member = {
    name: "Jeongho",
    age: 30,
};

// user.showName = function() {}; 만약 이렇게 user에 특정 함수를 추가하고 밑에와 같이 출력하면 의도치 않는 결과가 나온다.
Object.keys(user).forEach(key => console.log(`그의 ${key}는 ${user[key]} 입니다.`)) // 그의 showName는 function() {} 입니다.

// 위와 같은 경우 Symbol을 사용하면 의도한 대로 출력할 수 있다.
const showName = Symbol('show name');
user[showName] = function() {
    console.log(this.name);
}
Object.keys(user).forEach(key => console.log(`그의 ${key}는 ${user[key]} 입니다.`))