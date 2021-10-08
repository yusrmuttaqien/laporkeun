import { motion } from 'framer-motion';

import Image from '@/components/Image';
import InfoBar from './InfoBar';
import Content from './Content';
import Metadata from './Metadata';

import { report } from '@/pages/Public/variables/fakeData';
import { extend_variant } from '../variables/variants';

import styles from './Extend.module.scss';

const _framer = () =>
  import('@/utils/helpers/framer/_domMax').then((res) => res.default);

export default function Extend(props) {
  const { id, close } = props;
  const { rating, images, metadata, content } = report.find(
    (r) => r.name === id
  );

  return (
    <motion.section
      className={styles['details-comp-extend-frag']}
      variants={extend_variant}
    >
      <InfoBar close={close} rating={rating} />
      <Image customClass={styles['custom-image']} payload={images} />
      <Metadata metadata={metadata} />
      <Content content={content} />
    </motion.section>
  );
}
