import md5 from 'md5';

/**
 *
 * @param {String} value Text value to be hashed
 * @param {String} prefix Prefix value included in hash (secret)
 * @returns Hashed prefix + value
 */

export default async function hash(value, prefix) {
  let hash;

  try {
    hash = await md5(String(prefix) + String(value));
  } catch (err) {
    throw err;
  }

  return hash;
}
