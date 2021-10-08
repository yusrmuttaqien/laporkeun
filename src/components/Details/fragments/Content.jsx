import styles from './Content.module.scss';

export default function Content(props) {
  const {
    content: { title, desc },
  } = props;
  return (
    <section className={styles['details-comp-content-frag']}>
      <h2>{title}</h2>
      <p>{desc}</p>
    </section>
  );
}
