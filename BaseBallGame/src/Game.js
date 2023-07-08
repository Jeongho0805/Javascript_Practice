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
}  

module.exports = Game;