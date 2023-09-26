function argsToString(...args: any[]) {
  let ret = "";
  for (const arg of args) {
    ret = ret + String(arg) + "\n";
  }
  return ret;
}

function listToString(list: { [key: string]: any }[]) {
  let ret: string = "";
  if (list.length == 0) return ret;
  for (const key in list[0]) {
    ret += key + ",";
  }
  ret += "\n";
  for (const obj of list) {
    for (const key in obj) {
      ret += obj[key] + ",";
    }
    ret += "\n";
  }
  return ret;
}

function dateToString(date: Date) {
  let _month = date.getMonth() + 1;
  let _day = date.getDate();
  let _hour = date.getHours();
  let _minute = date.getMinutes();
  let _second = date.getSeconds();

  const month = _month >= 10 ? _month.toString() : "0" + _month;
  const day = _day >= 10 ? _day.toString() : "0" + _day;
  const hour = _hour >= 10 ? _hour.toString() : "0" + _hour;
  const minute = _minute >= 10 ? _minute.toString() : "0" + _minute;
  const second = _second >= 10 ? _second.toString() : "0" + _second;

  return (
    date.getFullYear() +
    "-" +
    month +
    "-" +
    day +
    "T" +
    hour +
    ":" +
    minute +
    ":" +
    second
  );
}

export { argsToString, listToString, dateToString };
