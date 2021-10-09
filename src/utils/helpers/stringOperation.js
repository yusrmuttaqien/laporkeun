export function stringConcat(cs) {
  let result;

  cs.map((c) => {
    if (!result) {
      if (![undefined, null, false].includes(c)) {
        result = c;
      }
    } else if (result) {
      if (![undefined, null, false].includes(c)) {
        result = result.concat(` ${c}`);
      }
    }
  });

  return result;
}

/**
 *
 * @param {Array} a - Array to match, ex: ['a', 'b', etc]
 * @param {*} v - Part of value tobe detected inside array
 * @returns - Wheter value inside array, fully or partialy
 */

export function stringPartialSearch(a, v) {
  const regex = (r) => new RegExp(r);
  let result = false;

  a.filter((d) => {
    if (regex(d).test(v)) {
      result = true;
    }
  });

  return result;
}
