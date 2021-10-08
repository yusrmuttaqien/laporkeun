/**
 *
 * @param {Array} arr - Array will be chacked against value, ex: [{key: *}, {key: *}]
 * @param {*} val - Value that fullfill the condition
 * @param {String} key - Key or object inside array that will be checked
 * @returns - Index of matching key inside array
 */

export default function arraySearchByValue(arr, val, key) {
  let id;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === val) {
      id = i;
    }
  }

  return id;
}
