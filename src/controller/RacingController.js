import Car from '../model/Car.js';
import InputHandler from '../view/InputHandler.js';
import OutputHandler from '../view/OutputHandler.js';
import WinnerFinder from '../utils/WinnerFinder.js';
import { Console } from '@woowacourse/mission-utils';

export default class RacingController {
  constructor() {
    this.inputHandler = new InputHandler();
    this.outputHandler = new OutputHandler();
    this.winnerFinder = new WinnerFinder();
  }

  async run() {
    const carNamesArray = await this.inputHandler.getCarNames();
    const carInstances = carNamesArray.map(function (carName) {
      return new Car(carName);
    });

    const tryCount = await this.inputHandler.getTryCount();

    this.outputHandler.printStartResult();
    Array.from({ length: tryCount }).forEach(
      function () {
        this.moveAllCars(carInstances);
        this.outputHandler.printResult(carInstances);
      }.bind(this),
    );

    const winners = this.winnerFinder.findWinners(carInstances);
    this.outputHandler.printWinner(winners);
  }

  moveAllCars(carInstances) {
    carInstances.forEach(function (carInstance) {
      carInstance.move();
    });
  }
}
