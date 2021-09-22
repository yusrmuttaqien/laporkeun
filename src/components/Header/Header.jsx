import styles from './Header.module.scss';

export default function Header(props) {
  return (
    <header className={styles['header-comp']}>
      <p>Laporan publik</p>
    </header>
  );
}
