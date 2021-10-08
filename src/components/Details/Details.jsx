import { useEffect } from 'preact/hooks';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

import { disableScroll, enableScroll } from '@/utils/helpers';

import Extend from './fragments/Extend';

import { detail_variant } from './variables/variants';

import styles from './Details.module.scss';

const _framer = () =>
  import('@/utils/helpers/framer/_domMax').then((res) => res.default);

export default function Details(props) {
  const { back, name } = props;
  const history = useHistory();

  const close = () => {
    history.push(back);
  };

  const overlayClose = (e) => {
    if (e.target.id === 'details-overlay') {
      close();
    }
  };

  useEffect(() => {
    disableScroll('#main-view');

    return () => enableScroll('#main-view');
  });

  return (
    <motion.section
      className={styles['details-comp']}
      onClick={overlayClose}
      id="details-overlay"
      variants={detail_variant}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <Extend id={name} close={close} />
    </motion.section>
  );
}
