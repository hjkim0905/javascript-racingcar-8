import { ERROR_MESSAGES } from '../constants/error.js';
import { REGEX } from '../constants/regex.js';

export default class CarNameValidationHandler {
  isEmptyString(carName) {
    if (!carName) {
      throw new Error(ERROR_MESSAGES.EMPTY_STRING);
    }
  }

  isExceedingFiveCharacters(carName) {
    if (carName.length > 5) {
      throw new Error(ERROR_MESSAGES.EXCEEDING_FIVE_CHARACTERS);
    }
  }

  isContainingSpecialCharacters(carName) {
    if (REGEX.NON_ALPHANUMERIC.test(carName)) {
      throw new Error(ERROR_MESSAGES.CONTAINING_SPECIAL_CHARACTERS);
    }
  }
}
