import Cross from '@/assets/cross.svg?component';
import ArrowUp from '@/assets/arrow-up.svg?component';

import styles from './InfoBar.module.scss';

const _framer = () =>
  import('@/utils/helpers/framer/_domMax').then((res) => res.default);

export default function InfoBar(props) {
  const { close, rating } = props;

  return (
    <span className={styles['details-comp-close-frag']}>
      <Cross onClick={close} />
      <span className={styles['close-frag-status']}>
        <ArrowUp />
        <p>{rating}</p>
      </span>
    </span>
  );
}
