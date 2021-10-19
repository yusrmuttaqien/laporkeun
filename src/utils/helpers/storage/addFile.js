import { main } from '@/utils/configs/firebase';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

/**
 *
 * @param {Object} payload
 * @param {String} payload.folder String of path
 * @param {String} payload.filename String of filename
 * @param {Object} payload.file File object
 * @returns True if successfull
 */

export default async function addFile(payload) {
  const { folder, filename, file } = payload;
  const storage = getStorage(main);
  const storageRef = ref(storage, `${folder}/${filename}`);
  let addRes;

  try {
    const addRes = await uploadBytes(storageRef, file);
  } catch (err) {
    throw err;
  }

  return addRes;
}
