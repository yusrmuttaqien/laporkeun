import { stringConcat } from '@/utils/helpers';
import Image from '../Image';

import styles from './Card.module.scss';

export default function Card(props) {
  const { customClass } = props;
  const cardClasses = stringConcat([styles['card-comp'], customClass]);

  return (
    <section className={cardClasses}>
      <Image
        customClass={styles['custom-image']}
        payload={{
          nonWebP:
            'https://firebasestorage.googleapis.com/v0/b/laporkeun-apps.appspot.com/o/laporan%2Fd8eccb9fd824c692737e1a3e663b674d1623258004923.jpeg?alt=media&token=2a578ca0-cfb4-417e-8da1-ab5eb625478b',
        }}
      />
      <section className={styles['card-comp-content']}>
        <h2>Titleefefesfsefeee</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, enim?
        </p>
      </section>
    </section>
  );
}
