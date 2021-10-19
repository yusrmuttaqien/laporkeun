import Image from '@/components/Image';
import Info from './fragments/Info';

import styles from './Home.module.scss';

export default function Home() {
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
      <Info />
    </section>
  );
}
