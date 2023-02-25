function isString(text: any): text is string {
  return typeof text === 'string'; // T of F
}

export { isString };
