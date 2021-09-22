import Card from '@/components/Card';
import Header from '@/components/Header';
import { Select } from '@/components/Input';

import styles from './Public.module.scss';

export default function Public() {
  return (
    <section className={styles['public-page']}>
      <Header />
      <section className={styles['public-page-lapor-wrapper']}>
        <Select
          customClass={styles['custom-select']}
          isSearchable={false}
          placeholder="Opsi sortir"
        />
        <Card customClass={styles['custom-card']} />
        <Card customClass={styles['custom-card']} />
        <Card customClass={styles['custom-card']} />
        <Card customClass={styles['custom-card']} />
        <Card customClass={styles['custom-card']} />
      </section>
    </section>
  );
}
