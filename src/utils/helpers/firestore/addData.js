import { main } from '@/utils/configs/firebase';
import { doc, setDoc, collection, getFirestore } from 'firebase/firestore';

/**
 *
 * @param {Object} payload
 * @param {String} payload.c Collection name
 * @param {String} payload.i ID string (null for automatic ID)
 * @param {Object} payload.d Data to be added
 * @returns True if success
 */

export default async function addData(payload) {
  const { c, i, d } = payload;
  const db = getFirestore(main);

  const id = i ? doc(db, c, i) : doc(collection(db, c));

  try {
    await setDoc(id, d);
  } catch (err) {
    throw err;
  }

  return true;
}
