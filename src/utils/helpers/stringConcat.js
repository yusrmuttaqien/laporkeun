export default function stringConcat(cs) {
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
