import classNames from 'classnames';
import styles from './styles.module.css';
import { InputProps } from './@types';

function Input(props: InputProps) {
  const { className, ...rest } = props;
  return (
    <input
      className={classNames(styles.input, className)}
      {...rest}
      type="text"
    />
  );
}

export default Input;
