const { Console } = require("@woowacourse/mission-utils");
const Computer = require("./Computer");
const User = require("./User");

class Gmae {
    constructor() {
        this.computer = new Computer();
        this.user = new User();
    }

    start() {
        this.computer.setNumber();
        this.play();
    }

    play() {
        this.user.setNumber();
        const result = this.countResult();
        this.printResult(result);
    }


    countResult() {
        let ball = 0;
        let strike = 0;

        const answerNumber = this.computer.getNumber;

        this.user.getNumber.forEach((value, index) => {
            if (value === answerNumber[index]) {
                strike++;
            } else if (answerNumber.include(value)) {
                ball++;
            }
        })
        return { ball, strike};
    }

    printResult({ball, strike}) {
        if (ball === 0 && strike === 0) {
            return Console.print('낫싱')
        }
        const ballText = ball? `${ball}볼` : "";
        const strikeText = strike? `${strike}스트라이크` : "";
        Console.print(`${ballText} ${strikeText}`);

    }
}  

module.exports = Game;