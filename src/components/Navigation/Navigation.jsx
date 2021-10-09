import { useLocation } from 'react-router-dom';

import { stringConcat } from '@/utils/helpers';

import NotLogged from './fragments/NotLogged';
import Logged from './fragments/Logged';

import styles from './Navigation.module.scss';
import { persistStateF } from '@/utils/configs/states';

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
