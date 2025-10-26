import { Console } from '@woowacourse/mission-utils';

export default class OutputHandler {
  printStartResult() {
    Console.print('\n실행 결과');
  }

  printResult(carInstances) {
    carInstances.forEach(function (carInstance) {
      Console.print(carInstance.carName + ' : ' + carInstance.getPosition());
    });
    Console.print('\n');
  }

  printWinner(winners) {
    const winnerNames = winners
      .map(function (winner) {
        return winner.carName;
      })
      .join(', ');
    Console.print('최종 우승자 : ' + winnerNames);
  }
}
