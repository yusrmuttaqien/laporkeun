import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { main } from '@/utils/configs';
import { CUStateF, persistStateF } from '@/utils/configs/states';

import callToast from '@/components/Toast/callToast';

export default async function initSession() {
  const auth = getAuth(main);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (user.uid === persistStateF().getPersist()) {
        CUStateF().setCU({
          uid: user.uid,
          username: user.displayName,
          email: user.email,
          profileIMG: user.photoURL,
        });
      } else if (!persistStateF().isLogged()) {
        CUStateF().setCU({
          uid: user.uid,
          username: user.displayName,
          email: user.email,
          profileIMG: user.photoURL,
        });
        persistStateF().setPersist(user.uid);
      } else if (user.uid !== persistStateF().getPersist()) {
        persistStateF().resetPersist();

        callToast({
          title: 'Autentikasi',
          content: 'Sesi tidak valid, silahkan masuk kembali',
        });
      }
    }
  });

  return;
}
