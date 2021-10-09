import { useState, useRef } from 'preact/hooks';
import { InView } from 'react-intersection-observer';

import { detectWebP, stringConcat } from '@/utils/helpers';

import Loading from '@/components/Loading';

import styles from './Image.module.scss';

/**
 *
 * @param {Object} props
 * @param {Object} props.customClass - Append custom class to wrapper node
 * @param {Object} props.payload - A list of data properties to show
 * @param {String} props.payload.WebP - Image for WebP type, as: [WebP]
 * @param {String} props.payload.nonWebP - Image for non WebP type, as: [jpg, png, jpeg, gif, jiff, etc]
 * @param {String} props.payload.alt - Image description text
 * @returns - Image wrapper with lazy loading and thumbnail while loading
 */

export default function ImageComp(props) {
  const { payload, customClass, status } = props;

  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const imgWrapper = useRef();

  const imageClasses = stringConcat([styles['image-comp'], customClass]);
  const loaderClasses = stringConcat([
    styles['image-comp-loader'],
    isLoading && styles.loading,
  ]);
  let source, imgElement;

  const onView = async (inView) => {
    if (inView) {
      let supportWebP;

      // Check payload
      if (!payload) {
        setError('Data dibutuhkan');
        return;
      }

      // Check source
      if (payload.WebP && payload.nonWebP) {
        supportWebP = await detectWebP();

        supportWebP ? (source = payload.WebP) : (source = payload.nonWebP);
      } else if (payload.WebP) {
        source = payload.WebP;
      } else if (payload.nonWebP) {
        source = payload.nonWebP;
      } else {
        setError('Tidak ada gambar');
        return;
      }

      // Fetch & compose image
      try {
        imgElement = new Image();
        imgElement.draggable = false;
        imgElement.alt = payload.alt || 'noAlt';
        imgElement.className = styles['image-comp-image'];

        imgElement.onload = () => {
          imgWrapper.current.appendChild(imgElement);

          setLoading(false);
        };
        imgElement.src = source;
      } catch {
        setError('Gagal memuat gambar');
      }
    }

    return;
  };

  return (
    <section className={imageClasses} ref={imgWrapper}>
      <InView
        className={loaderClasses}
        onChange={onView}
        triggerOnce={true}
        threshold={0.5}
      >
        {!!isError ? <p>{isError}</p> : <Loading />}
      </InView>
    </section>
  );
}
