import { getAuth, signOut } from 'firebase/auth';

import { main } from '@/utils/configs/firebase';
import { CUStateF, persistStateF } from '@/utils/configs/states';

import callToast from '@/components/Toast/callToast';

export default async function logout() {
  const auth = getAuth(main);

  try {
    await signOut(auth);
    await CUStateF().resetCU();
    await persistStateF().resetPersist();
  } catch (err) {
    throw err;
  }

  callToast({
    title: 'Autentikasi',
    content: 'Sesi anda telah diakhiri',
  });

  return true;
}
