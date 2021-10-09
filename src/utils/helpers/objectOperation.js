export function objectSelectFirstAvailable(lists, option) {
  let i;

  if (option.length === 0) {
    return null;
  }

  for (i = 0; i < option.length; i++) {
    if (![null, undefined].includes(lists[option[i]])) {
      break;
    }
  }

  return lists[option[i]];
}

export function proxyToObject(p) {
  return JSON.parse(JSON.stringify(p));
}
