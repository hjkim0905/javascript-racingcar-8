import { ERROR_MESSAGES } from '../constants/error.js';

export default class TryCountValidationHandler {
  isNumber(tryCount) {
    if (Number.isNaN(tryCount)) {
      throw new Error(ERROR_MESSAGES.NOT_A_NUMBER);
    }
  }

  isInteger(tryCount) {
    if (!Number.isInteger(tryCount)) {
      throw new Error(ERROR_MESSAGES.NOT_AN_INTEGER);
    }
  }

  isPositiveNumber(tryCount) {
    if (tryCount <= 0) {
      throw new Error(ERROR_MESSAGES.NOT_POSITIVE_NUMBER);
    }
  }
}
