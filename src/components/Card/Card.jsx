import { Link } from 'react-router-dom';

import { stringConcat } from '@/utils/helpers/stringOperation';

import Image from '../Image';

import ArrowUp from '@/assets/arrow-up.svg?component';

import styles from './Card.module.scss';

export default function Card(props) {
  const {
    customClass,
    payload: { images, rating, content, name },
  } = props;
  const cardClasses = stringConcat([styles['card-comp'], customClass]);

  return (
    <section className={cardClasses}>
      <span className={styles['card-comp-status']}>
        <ArrowUp />
        <p>{rating}</p>
      </span>
      <Image customClass={styles['custom-image']} payload={images} />
      <section className={styles['card-comp-content']}>
        <h2>{content.title}</h2>
        <p>{content.desc}</p>
      </section>
      <Link to={`/publik/${name}`} className={styles['card-comp-link']} />
    </section>
  );
}
