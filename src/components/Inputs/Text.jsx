import { stringConcat } from '@/utils/helpers/stringOperation';

import styles from './Text.module.scss';

/**
 *
 * @param {Object} props
 * @param {String} props.customClass Apply custom class
 * @param {Function} props.r Register for fields from react-hook-form
 * @param {Object} props.e Error object from react-hook-form
 * @param {String} props.name Field name unique from other fields
 * @param {String} props.label Label name unique from other Labels
 * @param {String} props.placeholder Placeholder for field input
 * @param {String} props.type Type for field input
 * @returns Common input field
 */

export default function Text(props) {
  const { customClass, r, e, name, label, placeholder, type } = props;
  const inputClasses = stringConcat([
    styles['input-comp'],
    customClass,
    e?.[name] && styles['error'],
  ]);

  return (
    <section className={inputClasses}>
      <input
        id={name}
        type={type || 'text'}
        placeholder={placeholder || 'placeholder disini'}
        {...r(name || 'input')}
      />
      <label htmlFor={name}>{e?.[name]?.message || label || name}</label>
    </section>
  );
}
