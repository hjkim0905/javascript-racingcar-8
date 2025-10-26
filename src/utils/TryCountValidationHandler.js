export default class TryCountValidationHandler {
  isNumber(tryCount) {
    if (Number.isNaN(tryCount)) {
      throw new Error('[ERROR] 숫자가 아닌 값이 입력되었습니다.');
    }
  }

  isInteger(tryCount) {
    if (!Number.isInteger(tryCount)) {
      throw new Error('[ERROR] 정수가 아닌 값이 입력되었습니다.');
    }
  }

  isPositiveNumber(tryCount) {
    if (tryCount <= 0) {
      throw new Error('[ERROR] 0 이하인 값이 입력되었습니다.');
    }
  }
}
