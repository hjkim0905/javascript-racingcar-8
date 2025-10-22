import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('시도 횟수 예외 테스트', () => {
  test('시도 횟수가 숫자가 아니면 예외 발생', async () => {
    const inputs = ['pobi,woni', 'abc'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('시도 횟수가 정수가 아니면 예외 발생', async () => {
    const inputs = ['pobi,woni', '1.5'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('시도 횟수가 0이면 예외 발생', async () => {
    const inputs = ['pobi,woni', '0'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('시도 횟수가 음수면 예외 발생', async () => {
    const inputs = ['pobi,woni', '-1'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});
