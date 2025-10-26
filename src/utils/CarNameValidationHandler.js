export default class CarNameValidationHandler {
  isEmptyString(carName) {
    if (!carName) {
      throw new Error('[ERROR] 빈 문자열이 입력되었습니다.');
    }
  }

  isExceedingFiveCharacters(carName) {
    if (carName.length > 5) {
      throw new Error('[ERROR] 이름이 5자 초과 입력되었습니다.');
    }
  }

  isContainingSpecialCharacters(carName) {
    if (/[^a-zA-Z0-9]/g.test(carName)) {
      throw new Error('[ERROR] 이름에 알바펫과 숫자 외의 특수문자가 포함되어있습니다.');
    }
  }
}
