import { useState } from 'preact/hooks';

import CRoute from '@/components/CRoute';
import Image from '@/components/Image';
import Splash from './fragments/Splash';
import Credit from './fragments/Credit';

import styles from './Home.module.scss';

function renderHome() {
  const [credit, setCredit] = useState(false);

  const creditSwitch = () => setCredit((prev) => !prev);

  return (
    <section className={styles['home-page']}>
      <Image
        customClass={styles['custom-image']}
        payload={{
          WebP: 'https://firebasestorage.googleapis.com/v0/b/laporkeun-test.appspot.com/o/backdrop%2Fbackdrop_01.webp?alt=media&token=cf0b768d-126e-4136-991f-6b9bf95bb2f1',
          nonWebP:
            'https://firebasestorage.googleapis.com/v0/b/laporkeun-test.appspot.com/o/backdrop%2Fbackdrop_01.jpg?alt=media&token=12b451e0-88be-4fe1-bb1b-05e338e7d874',
          alt: 'backdrop',
        }}
      />
      <section className={styles['home-page-intro']}>
        {credit ? <Credit /> : <Splash />}
        <button className={styles['custom-button']} onClick={creditSwitch}>
          {credit ? 'Kembali' : 'Dibelakang layar'}
        </button>
      </section>
    </section>
  );
}

export default function Home() {
  return <CRoute exact path="/" Component={renderHome} />;
}
