import { Random } from '@woowacourse/mission-utils';

export default class Car {
  constructor(carName) {
    this.carName = carName;
    this.forwardCount = 0;
  }

  move() {
    if (this.generateRandomNumber() >= 4) {
      this.forwardCount++;
    }
  }

  getPosition() {}

  generateRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }
}
