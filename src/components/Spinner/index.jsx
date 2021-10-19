import { stringConcat } from '@/utils/helpers/stringOperation';

export default function Spinner(props) {
  const { customClass, style, button } = props;
  const spinnerClasses = stringConcat([
    'spinner',
    customClass,
    button && 'spinner-button',
  ]);

  return (
    <div className={spinnerClasses} style={style}>
      .
    </div>
  );
}
