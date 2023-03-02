/**
 * 이메일 형식 검증 함수
 *
 * @param email - 이메일 형식인지 확인할 문자열
 * @returns 이메일 형식이 맞는지 여부
 */
function validateEmail(email: string) {
  return new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(
    email,
  );
}

/**
 * 비밀번호 형식 검증 함수 (8 <= 길이 <= 20)
 *
 * @param password - 비밀번호 형식인지 확인할 문자열
 * @returns 비밀번호 형식이 맞는지 여부
 */
function validatePassword(password: string) {
  const length = password.length;
  return 8 <= length && length <= 20;
}

function validatePasswordCheck(password: string) {
  return function (passwordCheck: string) {
    return password === passwordCheck;
  };
}

/**
 *
 * @param name - 어드민 로그인 name 한글자 이상 입력
 * @returns 이름 형식이 맞는지 여부
 */
function validateUsername(name: string) {
  const length = name.length;
  return 1 <= length;
}

/**
 * 날짜 형식 검증 함수
 *
 * @param date - 날짜 형식인지 확인할 문자열 (YY.MM.DD)
 * @returns 날짜 형식이 맞는지 여부
 */
function validateDate(date: string) {
  return new RegExp(/^\d{4}.\d{2}.\d{2}$/).test(date);
}

export {
  validateDate,
  validateEmail,
  validatePassword,
  validatePasswordCheck,
  validateUsername,
};
