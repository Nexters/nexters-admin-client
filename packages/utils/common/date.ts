function addZero(value: number) {
  return `00${value}`.slice(-2);
}

function formatYYMMDD(datetime: string) {
  return new Date(parseInt(datetime))
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, '.');
}

function formatHHMMSS(datetime: string) {
  const date = new Date(parseInt(datetime));
  return [date.getHours(), date.getMinutes(), date.getSeconds()]
    .map(addZero)
    .join(':');
}

export { formatHHMMSS, formatYYMMDD };
