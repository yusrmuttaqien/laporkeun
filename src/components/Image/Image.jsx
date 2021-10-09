import { useState, useRef, useEffect } from 'preact/hooks';
import { InView } from 'react-intersection-observer';

import {
  detectWebP,
  getFetch,
  requestTimeout,
  stringConcat,
} from '@/utils/helpers';

import Loading from '@/components/Loading';

import styles from './Image.module.scss';

/**
 *
 * @param {Object} props
 * @param {Object} props.customClass - Append custom class to wrapper node
 * @param {Function} props.status - A state setter for when img loaded
 * @param {Object} props.payload - A list of data properties to show
 * @param {String} props.payload.thumbnail - Placeholder image displayed while loading full res image, as: [Base64]
 * @param {String} props.payload.WebP - Image for WebP type, as: [WebP]
 * @param {String} props.payload.nonWebP - Image for non WebP type, as: [jpg, png, jpeg, gif, jiff, etc]
 * @param {String} props.payload.alt - Image description text
 * @returns - Image wrapper with lazy loading and thumbnail while loading
 */

export default function ImageComp(props) {
  const { payload, customClass, status } = props;

  const [isThumbnail, setThumbnail] = useState(false);
  const [isImage, setImage] = useState();
  const [isClass, setClass] = useState(
    stringConcat([styles['image-comp-image'], styles.standby])
  );
  const [isLoading, setLoading] = useState(true);
  const [isStatus, setStatus] = useState(false);
  const [isError, setError] = useState(false);
  const imgWrapper = useRef();

  const imageClasses = stringConcat([styles['image-comp'], customClass]);
  const loaderClasses = stringConcat([
    styles['image-comp-loader'],
    (isLoading || isThumbnail) && styles.loading,
  ]);
  const thumbnailClasses = stringConcat([
    styles['image-comp-thumbnail'],
    isLoading && styles.display,
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

      // Check status
      if (typeof status === 'function') {
        setStatus(true);
      }

      // Check thumbnail & thumbnail alt
      payload.thumbnail &&
        setThumbnail({
          thumbnail: payload.thumbnail,
          alt: `thumbnail_${payload.alt || 'alt'}`,
        });

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
        source = await getFetch(source, { outputAs: 'blobURL' });

        setImage(source);
        setLoading(false);
        isStatus && status(true);
        requestTimeout(() => setClass(styles['image-comp-image']), 10);
      } catch {
        setError('Gagal memuat gambar');
      }
    }

    return;
  };

  useEffect(() => {
    return () => URL.revokeObjectURL(source);
  }, [source]);

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
      {isThumbnail && (
        <img
          src={isThumbnail.thumbnail}
          alt={isThumbnail.alt}
          className={thumbnailClasses}
          draggable={false}
        />
      )}
      {isImage && (
        <img
          src={isImage}
          alt={`img_${payload?.alt || 'alt'}`}
          draggable={false}
          className={isClass}
        ></img>
      )}
    </section>
  );
}
