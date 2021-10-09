import { NavLink } from 'react-router-dom';

import Home from '@/assets/home.svg?component';
import { stringConcat } from '@/utils/helpers';
import { logout } from '@/utils/helpers/auth';

import styles from '../Navigation.module.scss';
import callToast from '@/components/Toast/callToast';

export default function Logged() {
  const logoutClasses = stringConcat([
    styles['nav-comp-custom-button'],
    styles['red'],
  ]);

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
      <button className={logoutClasses} onClick={endSession}>
        Keluar
      </button>
    </>
  );
}
