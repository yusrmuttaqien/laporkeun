import { NavLink } from 'react-router-dom';

import styles from './Switcher.module.scss';

export default function Switcher(props) {
  const { endpoint } = props;

  return (
    <section className={styles['entry-comp-switcher-frag']}>
      <NavLink
        activeClassName={styles.active}
        className={styles['custom-navlink']}
        to={`${endpoint}/daftar`}
      >
        Daftar
      </NavLink>
      <p>atau</p>
      <NavLink
        exact
        activeClassName={styles.active}
        className={styles['custom-navlink']}
        to={`${endpoint}`}
      >
        Masuk
      </NavLink>
    </section>
  );
}
