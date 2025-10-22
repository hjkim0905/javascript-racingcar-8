import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('자동차 경주', () => {
  test('기능 테스트', async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni', '1'];
    const logs = ['pobi : -', 'woni : ', '최종 우승자 : pobi'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('예외 테스트', async () => {
    // given
    const inputs = ['pobi,javaji'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});

describe('추가 기능 테스트', () => {
  test('여러 회차 동안 정상적으로 동작', async () => {
    const inputs = ['pobi,woni,jun', '3'];
    const randoms = [4, 5, 3, 6, 2, 4, 5, 7, 3];
    const logs = ['pobi : ---', 'woni : --', 'jun : -'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms(randoms);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('공동 우승자 정상 출력', async () => {
    const inputs = ['pobi,woni', '2'];
    const randoms = [4, 4, 5, 5];
    const logs = ['최종 우승자 : pobi, woni'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms(randoms);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('한 대의 자동차만 입력해도 정상 동작', async () => {
    const inputs = ['pobi', '2'];
    const randoms = [4, 5];
    const logs = ['최종 우승자 : pobi'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms(randoms);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('알파벳과 숫자 조합의 자동차 이름 허용', async () => {
    const inputs = ['car1,car2', '1'];
    const randoms = [4, 3];
    const logs = ['car1 : -', 'car2 : ', '최종 우승자 : car1'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms(randoms);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
