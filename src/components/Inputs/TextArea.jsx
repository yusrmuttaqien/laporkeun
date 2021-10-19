import { stringConcat } from '@/utils/helpers/stringOperation';

import styles from './TextArea.module.scss';

export default function TextArea(props) {
  const { customClass, r, e, name, label, placeholder } = props;
  const textboxClasses = stringConcat([
    styles['textarea-comp'],
    customClass,
    e?.[name] && styles['error'],
  ]);

  return (
    <section className={textboxClasses}>
      <textarea
        id={name}
        placeholder={placeholder || 'placeholder disini'}
        {...r(name || 'input')}
      ></textarea>
      <label htmlFor={name}>{e?.[name]?.message || label || name}</label>
    </section>
  );
}
