/**
 *
 * @param {String} slice - Return value from slicing, op: ['time', 'date']
 * @returns - Local time
 */

export function getLocaleTime(slice) {
  return UTCToLocale(UTCTime(), slice);
}

export function UTCTime() {
  return new Date().getTime();
}

/**
 *
 * @param {String} d - UTC timestamp
 * @param {String} slice - Return value from slicing, op: ['time', 'date']
 * @returns - Converted UTC time to local
 */

export function UTCToLocale(d, slice) {
  let date = new Date(d).toLocaleString();

  if (slice === 'time') {
    date = date.split(', ')[1];
  } else if (slice === 'date') {
    date = date.split(', ')[0];
  }

  return date;
}
