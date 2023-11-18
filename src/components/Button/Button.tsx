import classNames from 'classnames';
import { ButtonProps } from './@types';
import styles from './styles.module.css';

function Button(props: ButtonProps) {
  const { className, children, ...rest } = props;
  return (
    <button className={classNames(styles.btn, className)} {...rest}>
      {children}
    </button>
  );
}

export default Button;
