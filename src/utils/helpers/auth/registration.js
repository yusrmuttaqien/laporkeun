import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

import { main } from '@/utils/configs/firebase';
import addData from '../firestore/addData';
import getQuery from '../firestore/getQuery';
import hash from '../hash';
import updatesProfile from './updatesProfile';
import callToast from '@/components/Toast/callToast';

export default async function registation(payload) {
  const { username, email, password } = payload;
  const auth = getAuth(main);

  try {
    // Check if already registered
    let e = await hash(email, import.meta.env.VITE_APP_PREFIX);
    let u = await hash(username, import.meta.env.VITE_APP_PREFIX);

    let isEmail = await getQuery({
      c: 'users',
      whereCase: [['e', '==', e]],
    });
    let isUsername = await getQuery({
      c: 'users',
      whereCase: [['u', '==', u]],
    });

    if (isEmail.exist && isUsername.exist) {
      throw {
        title: 'User sudah terdaftar',
        content: 'Alamat surel dan Nama User sudah digunakan',
      };
    } else if (isEmail.exist || isUsername.exist) {
      throw {
        title: 'User sudah terdaftar',
        content: isEmail.exist
          ? 'Alamat surel sudah digunakan'
          : 'Nama User sudah digunakan',
      };
    }

    // Register
    let result = await createUserWithEmailAndPassword(auth, email, password);

    // Add identifier to database; Update user profile
    await updatesProfile({
      displayName: username,
    });

    await addData({
      c: 'users',
      i: result.user.uid,
      d: { e, u },
    });
  } catch (err) {
    throw err;
  }

  callToast({
    title: 'Autentikasi',
    content: 'Selamat, akun anda berhasil terdaftar',
  });

  return true;
}
