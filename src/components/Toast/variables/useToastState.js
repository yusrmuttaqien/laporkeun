import { useState } from 'preact/hooks';

export default function useToastState(max = 20) {
  const [toasts, setToast] = useState([]);
  let newToasts;

  const addToast = (s) =>
    setToast((prev) => {
      if (prev.length + 1 > max) {
        newToasts = prev.shift;
        return [...newToast, s];
      } else {
        return [...prev, s];
      }
    });

  const deleteToast = (i) => {
    return setToast(toasts.filter((toast) => toast.id !== i));
  };

  const clearToast = () => setToast([]);

  return { toasts, addToast, deleteToast, clearToast };
}
