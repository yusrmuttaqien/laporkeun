import { NavLink } from 'react-router-dom';

import { stringPartialSearch } from '@/utils/helpers';

import styles from '../Navigation.module.scss';

export default function NotLogged(props) {
  const { c } = props;

  const views = () => {
    if (stringPartialSearch(['/entri'], c)) {
      return (
        <>
          <NavLink to="/publik" className={styles['nav-comp-custom-button']}>
            Laporan publik
          </NavLink>
        </>
      );
    } else if (c === '/') {
      return (
        <>
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
