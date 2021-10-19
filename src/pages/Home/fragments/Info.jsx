import { useState } from 'preact/hooks';

import Splash from './Splash';
import Credit from './Credit';

import styles from '../Home.module.scss';

export default function Info() {
  const [credit, setCredit] = useState(false);

  const creditSwitch = () => setCredit((prev) => !prev);

  return (
    <section className={styles['home-page-intro']}>
      {credit ? <Credit /> : <Splash />}
      <button className={styles['custom-button']} onClick={creditSwitch}>
        {credit ? 'Kembali' : 'Dibelakang layar'}
      </button>
    </section>
  );
}
