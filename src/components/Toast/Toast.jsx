import { useEffect } from 'preact/hooks';
import { v4 as UUID } from 'uuid';

import { toastStateC } from '@/utils/configs/states';

import Cross from '@/assets/cross.svg?component';

import styles from './Toast.module.scss';

export default function Toast() {
  const state = toastStateC();

  const close = (id) => {
    state.deleteToast(id);
  };

  useEffect(() => {
    if (window && !window.toast_ydhm) {
      window.toast_ydhm = (payload) => {
        state.addToast({ id: UUID(), ...payload });
      };
    }
  });

  return (
    <section className={styles['toast-comp']}>
      {state.getToast()?.map((toast) => (
        <div className={styles['toast-comp-element']}>
          <header>
            <p>{toast.title}</p>
            <Cross onClick={close.bind(this, toast.id)} />
          </header>
          <p>{toast.content}</p>
        </div>
      ))}
    </section>
  );
}
