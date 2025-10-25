import Car from '../model/Car.js';
import InputHandler from '../view/InputHandler.js';
import OutputHandler from '../view/OutputHandler.js';
import { Console } from '@woowacourse/mission-utils';

export default class RacingController {
  constructor() {
    this.cars = [];
    this.inputHandler = new InputHandler();
    this.outputHandler = new OutputHandler();
  }

  async run() {
    const carNamesArray = await this.inputHandler.getCarNames();
    Console.print(carNamesArray);

    const tryCount = await this.inputHandler.getTryCount();
    Console.print(tryCount);
  }
}
