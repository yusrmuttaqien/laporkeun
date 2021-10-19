import { useEffect } from 'preact/hooks';
import { v4 as UUID } from 'uuid';

import useToastState from './variables/useToastState';

import Cross from '@/assets/cross.svg?component';

import styles from './Toast.module.scss';

export default function Toast() {
  const { toasts, addToast, deleteToast, clearToast } = useToastState();

  const close = (id) => {
    deleteToast(id);
  };

  useEffect(() => {
    if (window && !window.toast_ydhm) {
      window.toast_ydhm = (payload) => {
        addToast({ id: UUID(), ...payload });
      };
    }
  });

  return (
    <section className={styles['toast-comp']}>
      {toasts?.map((toast) => (
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
