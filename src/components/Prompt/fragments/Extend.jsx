import { useEffect } from 'preact/hooks';
import { motion } from 'framer-motion';

import { disableScroll, enableScroll } from '@/utils/helpers/scrollControl';

import { extend_variant } from '../variables/variants';

import styles from './Extend.module.scss';

export default function Extend({ payload, close }) {
  const { title, content, buttonNext, buttonBack, disabledID } = payload;

  useEffect(() => {
    if (disabledID) {
      disableScroll(disabledID);

      return () => enableScroll(disabledID);
    }
  }, [disabledID]);

  return (
    <motion.section
      className={styles['prompt-comp-extend-frag']}
      variants={extend_variant}
    >
      <div className={styles['extend-title']}>
        <h3>{title || 'No title'}</h3>
      </div>
      <div className={styles['extend-content']}>
        {content || <p>No content</p>}
      </div>
      <div className={styles['extend-buttons']}>
        {buttonNext && (
          <button
            onClick={close.bind(this, buttonBack.action && buttonBack.action)}
            className={styles['custom-button-secondary']}
          >
            {buttonBack.title}
          </button>
        )}
        <button
          onClick={
            buttonNext
              ? close.bind(this, buttonNext.action && buttonNext.action)
              : close.bind(this, buttonBack.action && buttonBack.action)
          }
        >
          {buttonNext
            ? buttonNext.title || 'Lanjut'
            : buttonBack.title || 'Kembali'}
        </button>
      </div>
    </motion.section>
  );
}
