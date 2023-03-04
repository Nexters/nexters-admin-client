function isBefore(date: string) {
  return new Date(date).valueOf() < new Date().valueOf();
}

function isAfter(date: string) {
  return new Date(date).valueOf() > new Date().valueOf();
}

function isToday(date: string) {
  return new Date(date).toDateString() === new Date().toDateString();
}

function getDecimalDay(date: string) {
  const diff = new Date(date).valueOf() - new Date().valueOf();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function formatMonthDate(date: string, separator = '.') {
  const dateObject = new Date(date);
  return `${dateObject.getMonth() + 1}${separator} ${dateObject.getDate()}`;
}

function formatKoreanMonthDate(date: string) {
  const dateObject = new Date(date);
  return `${dateObject.getMonth() + 1}월 ${dateObject.getDate()}일`;
}

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

export {
  addZero,
  formatHHMMSS,
  formatKoreanMonthDate,
  formatMonthDate,
  formatYYMMDD,
  getDecimalDay,
  isAfter,
  isBefore,
  isToday,
};
