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

export { validateEmail, validatePassword };
