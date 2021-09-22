/**
 *
 * @param {Array} a - Array to match, ex: ['a', 'b', etc]
 * @param {*} v - Part of value tobe detected inside array
 * @returns - Wheter value inside array, fully or partialy
 */

export default function stringPartialSearch(a, v) {
  const regex = (r) => new RegExp(r);
  let result = false;

  a.filter((d) => {
    if (regex(d).test(v)) {
      result = true;
    }
  });

  return result;
}
