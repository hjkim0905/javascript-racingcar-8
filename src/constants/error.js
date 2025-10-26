const ERROR_PREFIX = '[ERROR]';

export const ERROR_MESSAGES = {
  EMPTY_STRING: `${ERROR_PREFIX} 빈 문자열이 입력되었습니다.`,
  EXCEEDING_FIVE_CHARACTERS: `${ERROR_PREFIX} 이름이 5자 초과 입력되었습니다.`,
  CONTAINING_SPECIAL_CHARACTERS: `${ERROR_PREFIX} 이름에 알바펫과 숫자 외의 특수문자가 포함되어있습니다.`,
  NOT_A_NUMBER: `${ERROR_PREFIX} 숫자가 아닌 값이 입력되었습니다.`,
  NOT_AN_INTEGER: `${ERROR_PREFIX} 정수가 아닌 값이 입력되었습니다.`,
  NOT_POSITIVE_NUMBER: `${ERROR_PREFIX} 0 이하인 값이 입력되었습니다.`,
};
