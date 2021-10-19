import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { main } from '@/utils/configs/firebase';
import { CUStateF, persistStateF } from '@/utils/configs/states';

import callToast from '@/components/Toast/callToast';

export default async function login(payload) {
  const { email, password } = payload;
  const auth = getAuth(main);
  let result;

  try {
    result = await signInWithEmailAndPassword(auth, email, password);

    CUStateF().setCU({
      uid: result.user.uid,
      username: result.user.displayName,
      email: result.user.email,
      profileIMG: result.user.photoURL,
    });
    persistStateF().setPersist(result.user.uid);
  } catch (err) {
    throw err;
  }

  callToast({
    title: 'Autentikasi',
    content: `Selamat datang kembali, ${result.user.displayName}`,
  });

  return true;
}
