function dateStringMapper(date) {
  switch (date) {
    case '01':
      return 'January';
    case '02':
      return 'February';
    case '03':
      return 'March';
    case '04':
      return 'April';
    case '05':
      return 'May';
    case '06':
      return 'June';
    case '07':
      return 'July';
    case '08':
      return 'August';
    case '09':
      return 'September';
    case '10':
      return 'October';
    case '11':
      return 'November';
    case '12':
      return 'December';
    default:
      return '';
  }
}

export function dateFormatter(date) {
  const yearMonthDay = date.substring(0, 10).split('-');

  const formattedDate = `${dateStringMapper(yearMonthDay[1])} ${
    yearMonthDay[2]
  }, ${yearMonthDay[0]}`;

  return formattedDate;
}
