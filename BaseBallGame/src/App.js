const { Console } = require("@woowacourse/mission-utils");

const Game = require("./Game");

class App {
  constructor() {
    this.game = new Game(); // 명시적인 선언 과정이 자바와 다르게 필요 없음.
  }

  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.game.start();
  }
  
}

const app = new App();
app.play();

module.exports = App;
