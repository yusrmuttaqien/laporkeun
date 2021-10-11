import Logo from '@/assets/Logo.svg?component';

import styles from '../Home.module.scss';

export default function Splash() {
  return (
    <div className={styles['home-page-info']}>
      <Logo />
      <h2>Laporkeun</h2>
      <p>sampaikan keluhan anda disini</p>
    </div>
  );
}
