import { NavLink } from 'react-router-dom';

import { stringPartialSearch } from '@/utils/helpers';

import Logo from '@/assets/Logo.svg?component';

import styles from './NotLogged.module.scss';

export default function NotLogged(props) {
  const { c } = props;

  const views = () => {
    if (stringPartialSearch(['/entri'], c)) {
      return (
        <>
          <Logo />
          <NavLink to="/publik" className={styles['nav-comp-custom-button']}>
            Lihat laporan publik
          </NavLink>
        </>
      );
    } else if (c === '/') {
      return (
        <>
          <Logo />
          <NavLink to="/entri" className={styles['nav-comp-custom-button']}>
            Daftar atau Masuk
          </NavLink>
        </>
      );
    } else {
      return (
        <NavLink to="/entri" className={styles['nav-comp-custom-button']}>
          Daftar atau Masuk
        </NavLink>
      );
    }
  };

  return views();
}
