import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('자동차 이름 예외 테스트', () => {
  test('자동차 이름이 빈 문자열이면 예외 발생', async () => {
    const inputs = ['pobi,,woni'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('자동차 이름에 특수문자가 포함되면 예외 발생', async () => {
    const inputs = ['pobi,wo!ni'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('자동차 이름에 공백이 포함되면 예외 발생', async () => {
    const inputs = ['pobi,wo ni'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('자동차 이름이 5자를 초과하면 예외 발생', async () => {
    const inputs = ['pobiii,javaji'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});
