import { NavLink } from 'react-router-dom';

import { stringConcat } from '@/utils/helpers/stringOperation';
import logout from '@/utils/helpers/auth/logout';
import callToast from '@/components/Toast/callToast';
import callPrompt from '@/components/Prompt/callPrompt';

import Home from '@/assets/home.svg?component';

import styles from '../Navigation.module.scss';

export default function Logged() {
  const logoutClasses = stringConcat([
    styles['nav-comp-custom-button'],
    styles['red'],
  ]);

  const promptlogout = () => {
    callPrompt({
      title: 'Keluar ?',
      content: <p>Anda yakin ingin keluar dari akun ?</p>,
      buttonNext: { title: 'Ya, keluar', action: endSession },
      buttonBack: { title: 'Tidak, kembali' },
    });
  };

  const endSession = async () => {
    try {
      await logout();
    } catch (err) {
      callToast(err, { title: 'error', content: 'message' });
    }
  };

  return (
    <>
      <NavLink
        exact
        to="/"
        className={styles['nav-comp-custom-button']}
        activeClassName={styles['active']}
      >
        <Home />
      </NavLink>
      <NavLink
        to="/baru"
        className={styles['nav-comp-custom-button']}
        activeClassName={styles['active']}
      >
        Tambah laporan
      </NavLink>
      <NavLink
        to="/laporanku"
        className={styles['nav-comp-custom-button']}
        activeClassName={styles['active']}
      >
        Laporanku
      </NavLink>
      <NavLink
        to="/publik"
        className={styles['nav-comp-custom-button']}
        activeClassName={styles['active']}
      >
        Laporan publik
      </NavLink>
      <NavLink
        to="/profil"
        className={styles['nav-comp-custom-button']}
        activeClassName={styles['active']}
      >
        Profil
      </NavLink>
      <button className={logoutClasses} onClick={promptlogout}>
        Keluar
      </button>
    </>
  );
}
