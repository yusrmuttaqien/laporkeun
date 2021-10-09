/**
 *
 * @param {Object} props
 * @param {String} props.customClass Apply custom class
 * @param {String} props.text Text displayed when loading
 * @param {Boolean} props.stack Direction of arrangement for loading content
 * @returns Loading component
 */

export default function Loading(props) {
  const { customClass, text, stack } = props;

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: stack ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1em',
        fontSize: '1rem',
        height: '100%',
        width: '100%',
      }}
      className={customClass || ''}
    >
      <div
        className="spinner"
        style={{
          fontSize: '0.2em',
        }}
      >
        .
      </div>
      {!!text && (
        <p
          style={{
            fontWeight: '500',
            textAlign: 'center',
          }}
        >
          {text}
        </p>
      )}
    </section>
  );
}
