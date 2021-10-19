import { useEffect, useState } from 'preact/hooks';
import { motion, AnimatePresence } from 'framer-motion';

import Extend from './fragments/Extend';

import { prompt_variant } from './variables/variants';

import styles from './Prompt.module.scss';

export default function Prompt() {
  const [isPrompt, setPrompt] = useState(false);

  const close = async (e) => {
    e && (await e());
    setPrompt(false);
  };

  const overlayClose = (e) => {
    if (e.target.id === 'prompt-overlay') {
      close();
    }
  };

  useEffect(() => {
    if (window && !window.prompt_ydhm) {
      window.prompt_ydhm = (payload) => {
        setPrompt(payload);
      };
    }
  });

  return (
    <AnimatePresence>
      {!!isPrompt && (
        <motion.section
          className={styles['prompt-comp']}
          onClick={overlayClose}
          id="prompt-overlay"
          variants={prompt_variant}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Extend payload={isPrompt} close={close} />
        </motion.section>
      )}
    </AnimatePresence>
  );
}
