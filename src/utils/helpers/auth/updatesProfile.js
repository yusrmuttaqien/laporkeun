import { main } from '@/utils/configs/firebase';
import { getAuth, updateProfile, updateEmail } from 'firebase/auth';
import addFile from '../storage/addFile';

/**
 *
 * @param {Object} payload
 * @param {String} payload.displayName String for displayName
 * @param {String} payload.identifier String of hashed n & e
 * @param {String} payload.email String for email
 * @param {String} payload.password String for password
 * @param {Object} payload.file File object
 * @returns True if successfull
 */

export default async function updatesProfile(payload) {
  const { displayName, email, password, identifier, file } = payload;
  const auth = getAuth(main);
  let photoURL;

  try {
    photoURL =
      file &&
      (await addFile({
        folder: 'users',
        filename: identifier,
        file,
      }));

    if (displayName || photoURL) {
      await updateProfile(auth.currentUser, {
        displayName: displayName && displayName,
        photoURL: photoURL && photoURL,
      });
    }

    email && (await updateEmail(auth.currentUser, email));
    password && (await updatePassword(auth.currentUser, password));
  } catch (err) {
    throw err;
  }

  return true;
}
