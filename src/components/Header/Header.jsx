import styles from './Header.module.scss';

export default function Header(props) {
  const { title } = props;

  return (
    <header className={styles['header-comp']}>
      <p>{title || 'Title'}</p>
    </header>
  );
}
