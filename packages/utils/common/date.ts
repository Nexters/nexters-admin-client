function addZero(value: number) {
  return `00${value}`.slice(-2);
}

function formatYYMMDD(date: string) {
  return new Date(date).toISOString().slice(0, 10).replace(/-/g, '.');
}

function formatHHMMSS(datetime: string) {
  const date = new Date(datetime);
  return [date.getHours(), date.getMinutes(), date.getSeconds()]
    .map(addZero)
    .join(':');
}

export { formatHHMMSS, formatYYMMDD };
