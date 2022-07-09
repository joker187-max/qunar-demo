export function dateFormat(time) {
  let d = new Date(time);
  let datetime = `${d.getMonth() + 1 > 9 ? d.getMonth : "0" + d.getMonth()}-${
    d.getDate() > 9 ? d.getDate() : "0" + d.getDate()
  }`;
  return datetime;
}

export function weekFormat(time) {
  if (time === Date.now()) return "今天";

  const weekNum = new Date(time).getDay();
  let week = "";
  switch (weekNum) {
    case 0:
      week = "周日";
      break;
    case 1:
      week = "周一";
      break;
    case 2:
      week = "周二";
      break;
    case 3:
      week = "周三";
      break;
    case 4:
      week = "周四";
      break;
    case 5:
      week = "周五";
      break;
    case 6:
      week = "周六";
      break;
  }
  return week;
}
