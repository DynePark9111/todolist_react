function getDate() {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const current = new Date();
  const date = `${weekday[current.getDay()]}, ${current.getDate()} ${
    month[current.getMonth() + 1]
  } ${current.getFullYear()}`;
  return date;
}

export const date = getDate();

export function timePassed(time: Date): string {
  //TODO: FIX THIS!!!
  let postTime = new Date(time).getTime();
  let now = Date.now();
  let diff = now - postTime;
  let minute = 60000;
  if (diff <= minute) {
    return "1분 전";
  } else if (diff <= 2 * minute) {
    return "2분 전";
  } else if (diff <= 3 * minute) {
    return "3분 전";
  } else if (diff <= 5 * minute) {
    return "4분 전";
  } else if (diff <= 5 * minute) {
    return "5분 전";
  } else if (diff <= 10 * minute) {
    return "10분 전";
  } else if (diff <= 30 * minute) {
    return "30분 전";
  } else if (diff <= 60 * minute) {
    return "1시간 전";
  } else if (diff <= 2 * 60 * minute) {
    return "2시간 전";
  } else if (diff <= 4 * 60 * minute) {
    return "4시간 전";
  } else if (diff <= 6 * 60 * minute) {
    return "6시간 전";
  } else if (diff <= 12 * 60 * minute) {
    return "12시간 전";
  } else if (diff <= 24 * 60 * minute) {
    return "하루 전";
  } else if (diff <= 2 * 24 * 60 * minute) {
    return "2일 전";
  } else if (diff <= 3 * 24 * 60 * minute) {
    return "3일 전";
  } else if (diff <= 7 * 24 * 60 * minute) {
    return "일주일 전";
  } else if (diff <= 30 * 24 * 60 * minute) {
    return "한달 전";
  } else {
    return "옛날";
  }
}
