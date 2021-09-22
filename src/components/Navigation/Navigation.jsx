import { useLocation } from 'react-router-dom';

import { stringConcat } from '@/utils/helpers';

import NotLogged from './fragments/NotLogged';

import styles from './Navigation.module.scss';

export default function Navigation() {
  const location = useLocation().pathname;
  const isLogged = false;
  const navClasses = stringConcat([
    styles['nav-comp'],
    !isLogged && !['/publik'].includes(location) && styles['not-logged'],
  ]);

  return (
    <nav className={navClasses}>{!isLogged && <NotLogged c={location} />}</nav>
  );
}
