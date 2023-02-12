function validateEmail(email: string) {
  return new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(
    email,
  );
}

function validatePassword(password: string) {
  const length = password.length;
  return 8 <= length && length <= 20;
}

export { validateEmail, validatePassword };