import { useState, useRef, useEffect } from 'preact/hooks';
import { InView } from 'react-intersection-observer';

import {
  detectWebP,
  getFetch,
  requestTimeout,
  stringConcat,
} from '@/utils/helpers';

import Loading from '@/components/Loading/Loading';

import styles from './Image.module.scss';

/**
 *
 * @param {Object} props
 * @param {Object} props.customClass - Append custom class to wrapper node
 * @param {Object} props.payload - A list of data properties to show
 * @param {String} props.payload.thumbnail - Placeholder image displayed while loading full res image, as: [Base64]
 * @param {String} props.payload.WebP - Image for WebP type, as: [WebP]
 * @param {String} props.payload.nonWebP - Image for non WebP type, as: [jpg, png, jpeg, gif, jiff, etc]
 * @param {String} props.payload.alt - Image description text
 * @returns - Image wrapper with lazy loading and thumbnail while loading
 */

export default function ImageComp(props) {
  const { payload, customClass } = props;

  const [isThumbnail, setThumbnail] = useState(false);
  const [isLoading, setLoading] = useState(true);
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
  const sourceClasses = stringConcat([
    styles['image-comp-image'],
    styles.standby,
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
        setError('Sumber gambar dibutuhkan');
        return;
      }

      // Fetch image
      source = await getFetch(source, { outputAs: 'blobURL' });

      // Create img element
      imgElement = new Image();
      imgElement.src = source;
      imgElement.alt = `img_${payload?.alt || 'alt'}`;
      imgElement.draggable = false;
      imgElement.className = sourceClasses;
      imgElement.onload = () => {
        imgWrapper.current.appendChild(imgElement);
        setLoading(false);
        requestTimeout(
          () => (imgElement.className = styles['image-comp-image']),
          10
        );
      };
      imgElement.onerror = () => {
        setError('Gagal memuat gambar');
      };
    }

    return;
  };

  useEffect(() => {
    return () => URL.revokeObjectURL(source);
  }, []);

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
    </section>
  );
}
