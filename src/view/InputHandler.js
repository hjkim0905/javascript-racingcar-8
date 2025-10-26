import { Console } from '@woowacourse/mission-utils';
import CarNameValidationHandler from '../utils/CarNameValidationHandler.js';
import TryCountValidationHandler from '../utils/TryCountValidationHandler.js';
import { REGEX } from '../constants/regex.js';

export default class InputHandler {
  constructor() {
    this.carNameValidationHandler = new CarNameValidationHandler();
    this.tryCountValidationHandler = new TryCountValidationHandler();
  }

  async getCarNames() {
    const carNamesString = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    this.carNameValidationHandler.isEmptyString(carNamesString);

    const trimmedCarNamesString = carNamesString.replace(REGEX.SPACE, '');
    const carNamesArray = trimmedCarNamesString.split(',').filter(Boolean);

    carNamesArray.forEach(
      function (carName) {
        this.carNameValidationHandler.isExceedingFiveCharacters(carName);
        this.carNameValidationHandler.isContainingSpecialCharacters(carName);
      }.bind(this),
    );

    return carNamesArray;
  }

  async getTryCount() {
    const tryCount = Number(await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n'));
    this.tryCountValidationHandler.isNumber(tryCount);
    this.tryCountValidationHandler.isInteger(tryCount);
    this.tryCountValidationHandler.isPositiveNumber(tryCount);

    return tryCount;
  }
}
