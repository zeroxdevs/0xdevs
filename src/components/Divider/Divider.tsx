import classNames from 'classnames';
import Div from '../Div';
import { DividerProps } from './@types';
import styles from './styles.module.css';

function Divider(props: DividerProps) {
  const { variant, className, ...rest } = props;
  return <Div className={classNames(styles[variant], className)} {...rest} />;
}

export default Divider;
