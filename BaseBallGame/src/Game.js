const { Console } = require("@woowacourse/mission-utils");
const Computer = require("./Computer");
const User = require("./User");

class Game {
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
        if (this.isEnd(result)) {
            return askUser();
        }
        this.play();
        
        
    }


    countResult() {
        let ball = 0;
        let strike = 0;

        const answerNumber = this.computer.getNumber;

        console.log(this.user.getNumber())

        this.user.getNumber().forEach((value, index) => {
            if (value === answerNumber[index]) {
                strike++;
            } else if (answerNumber.include(value)) {
                ball++;
            }
        });
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

    isEnd({ strike }) {
        if (strike === 3) {
            Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
            return true;
        }
        return false;
    }

    askUser() {
        Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");

        const input = +Console.readLine();
        if (input === 1) {
            return this.replay();
        }
        else if (input === 2) {
            return this.exit();
        }
        else {
            throw new Error("잘못된 입력입니다. 게임이 종료됩니다.")
        }
    }

    replay() {
        this.start();
    }

    exit() {
        Console.close();
    }
}  

module.exports = Game;