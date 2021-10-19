import { useRef, useState } from 'preact/hooks';

import { stringConcat } from '@/utils/helpers/stringOperation';
import detectFileType from '@/utils/helpers/detectFileType';

import styles from './File.module.scss';

export default function File(props) {
  const { customClass, r, e, name, buttonTitle, placeholder, accept } = props;
  const fileClasses = stringConcat([
    styles['file-comp'],
    customClass,
    e?.[name] && styles['error'],
  ]);
  const inputRef = useRef();

  const clickInput = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  const imgPreview = async (e) => {
    const valid = await detectFileType(null, e.target.files[0], [
      'png',
      'jpeg',
      'jpg',
      'webp',
    ]);

    // if (valid) {
    // }
  };

  return (
    <section className={fileClasses}>
      <input
        {...r(name || 'input')}
        accept={accept}
        type="file"
        id={name}
        ref={inputRef}
        onChange={imgPreview}
      />
      <section className={styles['file-comp-wrapper']}>
        <div className={styles['file-comp-content']}>
          <p>{placeholder || 'Placeholder here'}</p>
        </div>
        <div className={styles['file-comp-buttons']}>
          <button onClick={clickInput}>{buttonTitle || 'Upload'}</button>
        </div>
      </section>
    </section>
  );
}
