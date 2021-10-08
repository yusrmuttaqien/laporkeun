import styles from './Metadata.module.scss';

export default function Metadata(props) {
  const {
    metadata: { user, date, status, visibility },
  } = props;
  return (
    <section className={styles['details-comp-meta-frag']}>
      <p data-type="n">{user}</p>
      <br />
      <p data-type="d">{date}</p>
      <br />
      <p data-type="s">{status}</p>
      <br />
      <p data-type="v">{visibility}</p>
      <br />
    </section>
  );
}
