const check = (input ) => {

    if (input.length !== 3) {
        throw new Error("3개의 숫자를 입력해주세요.");
    }
    if (new Set(input).size !== 3) {
        throw new Error("중복된 숫자는 입력할 수 없습니다.");
    }
    if (!/^[1-9]+$/g.test(input)) {
        throw new Error("숫자를 입력해주세요.");
    }
    return true;
};

const input = "12345";
let number = [];

number = input.split("").map((n) => +n);

check(number);

console.log(number);


