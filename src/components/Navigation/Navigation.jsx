import { useLocation } from 'react-router-dom';
import loadable from '@loadable/component';

import { stringConcat } from '@/utils/helpers/stringOperation';
import { persistStateF } from '@/utils/configs/states';

import styles from './Navigation.module.scss';

const Logged = loadable(() => import('./fragments/Logged'));
const NotLogged = loadable(() => import('./fragments/NotLogged'));

export default function Navigation() {
  const isLogged = persistStateF().isLogged();
  const location = useLocation().pathname;
  const navClasses = stringConcat([
    styles['nav-comp'],
    !isLogged && styles['not-logged'],
  ]);

  return (
    <nav className={navClasses}>
      <div className={styles.scroller}>
        {isLogged ? <Logged /> : <NotLogged c={location} />}
      </div>
    </nav>
  );
}
